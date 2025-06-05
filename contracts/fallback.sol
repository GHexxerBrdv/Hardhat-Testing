// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Fallback {
event Log(string message);
fallback() external payable{
    emit Log("fallback called");
}
}
