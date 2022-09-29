#!/usr/bin/env node
import minimist from "minimist";
// import moment from "moment-timezone";

// const timezone = moment.tz.guest();

//run from command line using node cli.js

function commandy(x){
    let m = "Hello, " + x + "."
    return m
}

const args = minimist(process.argv.slice(2))
const message_in = args.m
const message_out = commandy(message_in)

console.log(message_out)

// const response = await fetch('');
// const data = await response.data()