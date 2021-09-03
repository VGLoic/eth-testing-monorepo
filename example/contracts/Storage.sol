// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Storage {
    uint public value;

    function setValue(uint newValue) public {
        value = newValue;
    }
}