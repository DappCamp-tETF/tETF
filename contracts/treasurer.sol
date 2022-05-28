// SPDX-License-Identifier: MIT

//@title: treasurer.sol
//@author: dsyeag
//@notice: this contract accepts deposits and withdrawals,
    //maintains user balances, and interacts with the fundmanager.sol
    //contract.


pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./FundManager.sol";

contract treasurer {

    using SafeERC20 for IERC20;

    address owner;    
    IERC20 usdc = IERC20(0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b);
    IERC20 tETF = IERC20(0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599); //using WBTC address as placeholder
    
    mapping (address => uint) usdcByAddress;
    mapping (address => uint) tETFByAddress;

    event Deposit (address indexed _from, uint _value);
    event WithdrawUSDC(address indexed _to, uint _value);
    event WithdrawtETF(address indexed _to, uint _value);
    event Balances(address indexed _from, uint _usdcValue, uint _tETFValue);

    // constructor() public {
    //     owner = msg.sender;
    // }

    function withdrawUSDC(uint amount) public {
        require(owner == msg.sender);
        require(amount<=usdcByAddress[msg.sender],"You do not hold enough USDC");
        SafeERC20.safeTransferFrom(usdc, address(this), msg.sender, amount);
        usdcByAddress[msg.sender]-=amount;

        emit WithdrawUSDC(msg.sender, amount);
    }

    function withdrawtETF(uint amount) public {
        require(amount<=tETFByAddress[msg.sender],"You do not hold enough tETF.");
        SafeERC20.safeTransferFrom(tETF, address(this), msg.sender, amount);
        tETFByAddress[msg.sender]-=amount;

        emit WithdrawtETF(msg.sender, amount);
    }
    function deposit(address from, uint amount) public payable {
        require(msg.value == amount);
        SafeERC20.safeTransferFrom(usdc, msg.sender, address(this), amount);
        usdcByAddress[from]+=amount;
        //@dev add send to Fund Manager

        emit Deposit(msg.sender, msg.value);
    }

    function getBalances() public view returns (uint, uint) {
        return (usdcByAddress[msg.sender], tETFByAddress[msg.sender]);

       //emit Balances(msg.sender, usdcByAddress[msg.sender], tETFByAddress[msg.sender]); 
    }
    // function gettETFBalance() public view returns (uint) {
    //     return tETFByAddress[msg.sender];
    // }
}
