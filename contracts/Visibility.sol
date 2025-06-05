// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract Visibility{
  uint public a = 10;
  uint internal b = 10;
  uint private c = 10;

  function pub() public pure returns(uint){
    return 10;
  }

  function priv() public pure returns(uint){ 
    return 10;
  }

  function intern() internal pure returns(uint){
    return 10;
  }

  function ext() external pure returns(uint){
      return 25;
  }

}