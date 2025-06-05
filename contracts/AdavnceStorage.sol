// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AdvanceStorage { 
  uint[] public datas ;

  function add(uint data) public{
    datas.push(data);
  }

  function get(uint i) public view returns (uint){
    return datas[i];
  }

  function getArray() public view returns (uint[] memory){ 
    return datas;
  }

  function getLength() public view returns (uint lenght){
    lenght = datas.length;
  }
}