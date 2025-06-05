// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Calculator{
    uint public a;
    uint public b;

    function add() public view returns(uint256) { 
      return a+b;
    }
    function sub () public view returns(uint256) {
      require(a>=b , "b must be less than or equal to a");
      return a - b; 
    } 
    function mul () public view returns(uint256){
       return a * b; 
    }
    function div () public view returns(uint256){ 
      require(b != 0 , "b can't be zero");
      return a / b; 
    } 
    function set(uint _a, uint _b) public{
         a = _a;
         b = _b;
    }
    function setAToMax() public { 
        a = type(uint).max;
    }
}