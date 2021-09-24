import React, { useState } from 'react';
import PropTypes from 'prop-types';

function add(first:number, second:number): number {
    return first + second;
}

function sub(data: {first: number, second: number}): number {
    return data.first - data.second;
}

function mult(data: {first: number, second: number}): number {
    return data.first * data.second;
}

function div(data: {first: number, second: number}): number {
    return data.first / data.second;
}

export function solve() {

}

export function handleInput(input: number, tmp: number, neg: boolean, dec: boolean): number {
    // When button pressed, input num added to tmp(working number waiting to be calculated)

        // handles if decimal/neg are active
    if (dec === false) {
        tmp = (tmp * 10) + input;
    } else {
        tmp = (tmp * .1) + input;
    }

    if (neg === true) {     // must turn neg false after function is returned
        tmp *= -1;
    }

    return tmp;
}

export function clear(all: boolean) {
    
}




