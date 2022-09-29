#!/usr/bin/env node
import minimist from "minimist";
import moment from "moment-timezone";

// const timezone = moment.tz.guest();

function commandy(x){
    let m = "Hello, " + x + "."
    return m
}

const message_in = minimist(process.argv.slice(2))
const message_out = commandy(message_in)

console.log(message_out)

// const response = await fetch('');
// const data = await response.data()