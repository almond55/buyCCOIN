// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./Ownable.sol";
import "./SafeMath.sol";

contract KyotoSwap is IERC20, Ownable {
	using SafeMath for uint256;

	IERC20 public busd;
	IERC20 public kyo;

	constructor(address _busd, address _kyo) {
		busd = IERC20(_busd);
		kyo = IERC20(_kyo);
	}

	function swap(uint256 _amountbusd) public {
		require(_amountbusd > 0);
		require(_amountbusd <= busd.balanceOf(_msgSender()),
			"BUSD in wallet too low."
		);

		uint256 _amountkyo = _amountbusd.mul(10);

		require(busd.allowance(_msgSender(), address(this)) >= _amountbusd,
			"BUSD allowance too low."
		);
		
		_safeTransferFrom(busd, _msgSender(), owner(), _amountbusd);
		kyo.transfer(_msgSender(), _amountkyo);
	}

	function _safeTransferFrom(
		IERC20 token,
		address sender,
		address recipient,
		uint256 amount
	) private {
		bool send = token.transferFrom(sender, recipient, amount);
		require(send, "Token transfer failed.");
	}

	function withdrawbalance() public onlyOwner {
		uint256 balance = kyo.balanceOf(address(this));
		kyo.transfer(owner(), balance);
	}

	function allowance(address owner, address spender) external virtual override view returns (uint256) {}
	function approve(address spender, uint256 amount) external virtual override returns (bool) {}
	function balanceOf(address account) external virtual override view returns (uint256) {}
	function totalSupply() external virtual override view returns (uint256) {}
	function transfer(address recipient, uint256 amount) external virtual override returns (bool) {}
	function transferFrom(address sender, address recipient, uint256 amount) external virtual override returns (bool) {}
}