// SPDX-License-Identifier: MIT

//@title: treasurer.sol
//@author: dsyeag
//@notice: this contract accepts deposits and withdrawals,
    //maintains user balances, and interacts with the fundmanager.sol
    //contract.


pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
//import {Math} from "@openzeppelin/contracts/math/Math.sol";
//import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";

contract treasurer {

    //using Math for uint256;
    //using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address owner;    // current owner of the contract
    IERC20 usdc = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48);
    //string tokenAddress = web3.utils.toChecksumAddress(0x514910771af9ca656af840dff83e8264ecf986ca);
    IERC20 tETF = IERC20(0x514910771AF9Ca656af840dff83E8264EcF986CA); //using LINK address as placeholder
    mapping (address => uint) usdcByAddress;
    mapping (address => uint) tETFByAddress;

    constructor() public {
        owner = msg.sender;
    }

    function withdrawUSDC(uint amount) public {
        require(owner == msg.sender);
        require(amount<=usdcByAddress[msg.sender],"You do not hold enough USDC");
        SafeERC20.safeTransferFrom(usdc, address(this), msg.sender, amount);
        usdcByAddress[msg.sender]-=amount;
    }
    function withdrawtETF(uint amount) public {
        require(amount<=tETFByAddress[msg.sender],"You do not hold enough tETF.");
        SafeERC20.safeTransferFrom(tETF, address(this), msg.sender, amount);
        tETFByAddress[msg.sender]-=amount;
    }
    function deposit(address from, uint amount) public payable {
        require(msg.value == amount);
        SafeERC20.safeTransferFrom(usdc, msg.sender, address(this), amount);
        usdcByAddress[from]+=amount;
    }

    function getUSDCBalance() public view returns (uint) {
        return usdcByAddress[msg.sender];
    }
    function gettETFBalance() public view returns (uint) {
        return tETFByAddress[msg.sender];
    }
}
