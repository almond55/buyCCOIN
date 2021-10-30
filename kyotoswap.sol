// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/utils/math/SafeMath.sol";

abstract contract KyotoSwap is IERC20, Ownable {
	using SafeMath for uint256;

	IERC20 public busd;
	IERC20 public kyo;

	constructor (
	    	address _busd,
        	address _kyo
	){
		busd = IERC20(_busd);
		kyo = IERC20(_kyo);
	}

	function swap(uint256 _amountbusd) public {
		require(_amountbusd > 0);
		require(_amountbusd <= busd.balanceOf(_msgSender()));
		uint256 amountkyo = _amountbusd.mul(10);
		busd.approve(address(this), _amountbusd);
		busd.transferFrom(_msgSender(), owner(), _amountbusd);
		kyo.transferFrom(owner(), _msgSender(), amountkyo);
	}
	
	function addkyo(uint _amountkyo) public onlyOwner {
		require(_amountkyo > 0);
		require(_amountkyo <= kyo.balanceOf(_msgSender()));
		kyo.approve(address(this), _amountkyo);
	}
}
