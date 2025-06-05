// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract eventContract {
  event functionCalled(uint timestamp ,string reason); 
  function callEvent (string  memory reason) public {
    emit functionCalled(block.timestamp,reason);
  }
}