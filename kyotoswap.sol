pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/utils/math/SafeMath.sol";

contract KyotoSwap is IERC20, Ownable {
	using SafeMath for uint;

	IERC20 public busd;
	IERC20 public kyo;
	uint public amountbusd;
	uint public amountkyo;
	uint public availablekyo;

	constructor(
	    address _busd,
        address _kyo,
        uint _availablekyo;
	){
		busd = IERC20(_busd);
		kyo = IERC20(_kyo);
		kyo.increaseAllowance(address(this), _availablekyo);
		availablekyo = _availablekyo;
	}

	function swap(uint _amountbusd, uint _amountkyo) public {
		require(_amountbusd > 0);
		require(_amountbusd <= busd.balanceOf[_msgSender()]);
		_amountkyo = _amountbusd.tryDiv(10);
		require(_amountkyo >= availablekyo);
		busd.increaseAllowance(address(this), _amountbusd);
		busd.transferFrom(_msgSender(), owner(), _amountbusd);
		kyo.transferFrom(owner(), _msgSender(), _amountkyo);
		availablekyo = availablekyo.trySub(_amountkyo);		
	}

	function addkyo(uint _amountkyo) public onlyOwner {
		require(_amountkyo > 0);
		require(_amountkyo <= kyo.balanceOf[_msgSender()]);
		kyo.increaseAllowance(address(this), _amountkyo);
		availablekyo = availablekyo.tryAdd(_amountkyo);
	}
}
