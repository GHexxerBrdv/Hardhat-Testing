// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleStorage {
  uint public number;
  function setNumber(uint value) public  {
    number = value;
  }
}