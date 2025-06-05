// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract enumContract{
  enum choice { yes , no , maybe}
  choice public RSVP = choice.maybe;
  function changeEnum(choice choices) public{
    RSVP = choices;
  }
}