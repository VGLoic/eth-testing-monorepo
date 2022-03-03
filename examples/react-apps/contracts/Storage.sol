// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Storage {
    uint public value;

    event ValueUpdated(uint value);

    constructor() {
        emit ValueUpdated(0);
    }

    function setValue(uint newValue) public {
        value = newValue;
        emit ValueUpdated(newValue);
    }
}