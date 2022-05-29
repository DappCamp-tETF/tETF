// SPDX-License-Identifier: MIT

//@title: treasurer.sol
//@author: dsyeag
//@notice: this contract accepts deposits and withdrawals,
    //maintains user balances, and interacts with the fundmanager.sol
    //contract.


pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./FundManager.sol";

contract treasurer is FundManager {

    //using SafeERC20 for IERC20;

    address owner;    
    IERC20 usdc = IERC20(0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b);
    IERC20 tETF = IERC20(0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599); //using WBTC address as placeholder
    
    mapping (address => int256) usdcByAddress;
    mapping (address => int256) tETFByAddress;

    event Deposit (address indexed _from, uint _value);
    event Withdraw(address indexed _to, string _withdrawn, string _balance);
    event Balances(address indexed _from, uint _usdcValue, uint _tETFValue);


    function withdraw(address to, int256 amount) public {
        require(amount<=tETFByAddress[msg.sender],"You do not hold enough tETF.");
        liquidate(amount);
        uint usdcWithdrawn = 12;
        tETFByAddress[msg.sender] -= amount;

        emit Withdraw(msg.sender, "USDC Withdrawn: 12", "New Balance: 0");
    }

    function deposit(address from, int256 amount) public payable {
        require(keccak256(abi.encodePacked(msg.value)) == keccak256(abi.encodePacked(amount)));
        //SafeERC20.safeTransferFrom(usdc, msg.sender, address(this), amount);
        int256 tETFAdded = invest(amount);
        tETFByAddress[msg.sender] += tETFAdded;
        emit Deposit(msg.sender,string.concat("tETF purchased: ", tETFAdded.toString()),
        string.concat("New Balance: ", tETFByAddress[msg.sender].toString()));
    }

    function getBalances() public view returns (uint, uint) {
        return (usdcByAddress[msg.sender], tETFByAddress[msg.sender]);
    }


       //emit Balances(msg.sender, usdcByAddress[msg.sender], tETFByAddress[msg.sender]); 
}
    // function gettETFBalance() public view returns (uint) {
    //     return tETFByAddress[msg.sender];
    // }

