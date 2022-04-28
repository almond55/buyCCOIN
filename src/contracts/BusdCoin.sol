// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";

contract Token is ERC20 {
	constructor () ERC20("Binance USD", "BUSD") {
		_mint(_msgSender(), 100000 * 10**18);
	}
}