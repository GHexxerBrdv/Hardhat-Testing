// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract structContract {

  //simple struct 

  struct Student{
    uint registration_id;
    string name;
  }

  Student public structExample = Student (19 , "viraj");

  //array of struct
  
  struct Todo{
        string text;
        bool completed;
  }

  Todo [] public todos;

  function create(string calldata _text) external{
        todos.push (Todo({text : _text , completed: false}));
  }
  
  //Mapping of struct

  struct Car{
    string name;
    uint maxSpeed;
  }

  mapping (uint => Car) public CarMapping;

  function addCar(uint index, string memory name, uint maxSpeed) public {
    CarMapping[ index ] = Car(name,maxSpeed);
  }

  // mapping of struct array

  mapping (uint => Car[]) public CarMappingArr;
  function addCarToMOSA(uint index , string memory name, uint maxSpeed) public { 
    CarMappingArr[index].push(Car(name,maxSpeed));
   }
}
