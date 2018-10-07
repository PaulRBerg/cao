pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract CAOToken is Ownable, StandardToken {

    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    constructor(string _name, string _symbol, uint256 _supply) public {
        name = _name;
        symbol = _symbol;
        decimals = 18;
        totalSupply = _supply * 10**uint(decimals);

        balances[owner] = totalSupply;
        emit Transfer(address(0x0), owner, totalSupply);
    }
}