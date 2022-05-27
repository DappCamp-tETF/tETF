// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/Uniswap.sol";

contract TestUniswap {
  address private constant UNISWAP_V2_ROUTER =
    0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;

  function swap(
    address _tokenIn,
    address _tokenOut,
    uint _amountIn,
    uint _amountOutMin,
    address _to // contract address
  ) internal {
    IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
    IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

    address[] memory path;
    path = new address[](2);
    path[0] = _tokenIn;
    path[1] = _tokenOut;

    IUniswapV2Router(UNISWAP_V2_ROUTER).swapExactTokensForTokens(
      _amountIn,
      _amountOutMin,
      path,
      _to,
      block.timestamp
    );
  }

  function getAmountOutMin(
    address _tokenIn,
    address _tokenOut,
    uint _amountIn
  ) public view returns (uint) {
    address[] memory path;
    path = new address[](2);
    path[0] = _tokenIn;
    path[1] = _tokenOut;

    // same length as path
    uint[] memory amountOutMins =
      IUniswapV2Router(UNISWAP_V2_ROUTER).getAmountsOut(_amountIn, path);

    return amountOutMins[path.length - 1];
  }


  function invest(
        address _tokenIn, // USDC
        uint256 _investmentAmount,
        address[] memory tokenArray,
        uint256[] memory weightArray
    ) external payable {
        require(_investmentAmount > 0, "amount has to be positive");

        
        for (uint256 i = 0; i < tokenArray.length; i++) {
              uint256 minAmount = getAmountOutMin(_tokenIn, tokenArray[i], _investmentAmount);
              swap(
                  _tokenIn, // USDC
                  tokenArray[i], 
                  _investmentAmount*weightArray[i],
                  minAmount,
                  msg.sender
              );
        }
        
    }

    function liquidate(
      uint256 _liquidationAmount,
      address[] memory tokenArray,
      uint256[] memory weightArray,
      address _tokenOut) external {

        for (uint256 i = 0; i < tokenArray.length; i++) {
              uint256 minAmount = getAmountOutMin(_tokenOut, tokenArray[i], _liquidationAmount);
              swap(
                  tokenArray[i],
                  _tokenOut, // USDC
                  _liquidationAmount*weightArray[i],
                  minAmount,
                  msg.sender
              );
        }
    }


}