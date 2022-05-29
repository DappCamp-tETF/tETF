// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/Uniswap.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundManager {
  address private constant UNISWAP_V2_ROUTER =
    0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;

  address private constant USDC = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
  address private constant WBTC = 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599;
  address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

  // gets the price of each asset from chainlink
  function getPrice() public view returns (int, int) {
    AggregatorV3Interface ethFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
    AggregatorV3Interface btcFeed = AggregatorV3Interface(0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c);

    (
      uint ethRoundID,
      int ethPrice,
      uint ethStartedAt,
      uint ethTimeStamp,
      uint80 ethAnsweredInRound
    ) = ethFeed.latestRoundData();

    (
      uint btcRoundID,
      int btcPrice,
      uint btcStartedAt,
      uint btcTimeStamp,
      uint80 btcAnsweredInRound
    ) = btcFeed.latestRoundData();

    return (ethPrice, btcPrice);
  }
  
  // makes the swaps on uniswap
  // called by invest and liquidate
  function swap(
    address _tokenIn,
    address _tokenOut,
    uint _amountIn,
    string memory _swapType,
    uint _amountOutMin,
    address _to // contract address
  ) internal {

    if (keccak256(abi.encodePacked(_swapType)) == keccak256(abi.encodePacked("invest"))){
          IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        }
    IERC20(_tokenIn).approve(UNISWAP_V2_ROUTER, _amountIn);

    address[] memory path;
    path = new address[](2);
    path[0] = USDC;
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

  // invests the USDC in the underlying assets and returns the number of tETF tokens
  // treasurer should map the number of tETF tokens to the user and store it
  function invest(
        address _tokenIn, // USDC
        uint256 _investmentAmount
    ) internal {
        require(_investmentAmount > 0, "amount has to be positive");
        uint minAmount;
        uint ethPrice;
        uint btcPrice;

        (ethPrice, btcPrice) = getPrice();

        uint btcInvestment = _investmentAmount*btcPrice/(btcPrice + 20*ethPrice);
        uint ethInvestment = _investmentAmount*ethPrice/(btcPrice + 20*ethPrice);

        swap(
              USDC, // USDC
              WBTC, // WBTC address
              btcInvestment,
              minAmount,
              address(this)
              );

        swap(
              USDC, // USDC
              WETH, // WETH address
              ethInvestment,
              minAmount,
              address(this)
              );
        uint tETFTokens = _investmentAmount/(btcPrice + 20*ethPrice);
        return tETFTokens;
        
    }
    // completes the swaps and sends USDC to the user. tETF tokens should be reduces by treasurer
    function liquidate(
      uint256 _tETFTokens) internal {
      uint minAmount;
      uint ethPrice;
      uint btcPrice;
      uint btcLiquidation;
      uint ethLiquidation;

      (ethPrice, btcPrice) = getPrice();

      btcLiquidation = _tETFTokens*btcPrice/(btcPrice + 20*ethPrice);
      ethLiquidation = _tETFTokens*ethPrice/(btcPrice + 20*ethPrice);

        swap(
              WBTC, // WBTC
              USDC, // USDC address
              btcLiquidation,
              minAmount,
              msg.sender
              );

        swap(
              WETH, // WETH
              USDC, // USDC address
              ethLiquidation,
              minAmount,
              msg.sender
              );

    }


}