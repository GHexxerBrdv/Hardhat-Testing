// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract mappingContract{
  mapping(address => uint) public normalMapping;
  mapping(uint => mapping (address => bool)) public nestedMapping;
  mapping(uint => mapping (address => mapping( address => string))) public doubleNestedMapping;
  function setElement(uint a) public {
    normalMapping[msg.sender] = a;
  }
  function setElementNestedMapping(uint a , bool b) public {
    nestedMapping[a][msg.sender] = b;
  }
  function setElementinDoubleNestedMapping(uint i, address a, address b, string calldata c) public {
    doubleNestedMapping[i][a][b] = c;
  }
}