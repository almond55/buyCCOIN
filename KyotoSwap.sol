// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./Ownable.sol";
import "./SafeMath.sol";

contract KyotoSwap is IERC20, Ownable {
	using SafeMath for uint256;

	IERC20 public busd;
	IERC20 public kyo;
	uint256 public amountkyo;

	constructor (
	    address _busd,
        address _kyo,
        uint256 _amountkyo
	){
		busd = IERC20(_busd);
		kyo = IERC20(_kyo);
		kyo.approve(address(this), _amountkyo * 10**18);
		amountkyo = _amountkyo;
	}

	function swap(uint256 _amountbusd) public {
		require(_amountbusd > 0);
		require(_amountbusd <= busd.balanceOf(_msgSender()));
		uint256 _amountkyo = _amountbusd.mul(10);
		require(_amountkyo <= amountkyo);
		busd.transfer(owner(), _amountbusd);
		kyo.transferFrom(owner(), _msgSender(), _amountkyo);
		amountkyo = amountkyo.sub(_amountkyo);
	}
	
	function addamountkyo(uint256 _amountkyo) public onlyOwner {
		require(_amountkyo > 0);
		require(_amountkyo <= kyo.balanceOf(_msgSender()));
		kyo.approve(address(this), _amountkyo);
		amountkyo = amountkyo.add(_amountkyo);
	}
	
	// implementations required to use interface
    function allowance(address owner, address spender) external override view returns (uint256) {}
    function approve(address spender, uint256 amount) external override returns (bool) {}
    function balanceOf(address account) external override view returns (uint256) {}
    function totalSupply() external override view returns (uint256) {}
    function transfer(address recipient, uint256 amount) external override returns (bool) {}
    function transferFrom(address sender,  address recipient, uint256 amount) external override returns (bool) {}
}
