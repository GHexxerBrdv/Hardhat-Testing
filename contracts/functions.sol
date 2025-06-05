// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

contract functionContract {
  bool fallbackcalled = false;
  function pubFunction () public pure returns(uint){
    uint a = 10 ;
    uint b = 30;
    uint c  = a+b ;
    return c;
  }
  function payableFunction () public payable returns(uint){
    require(msg.value >= 10 , "send more eth");
    return msg.value;
  }
  fallback() external {
    fallbackcalled = true;
  }
}