#!/usr/bin/env node
import minimist from "minimist";
import moment from "moment-timezone";

// const timezone = moment.tz.guest();

//run from command line using node cli.js

function commandy(x){
    let m = "Hello, " + x + "."
    return m
}

const args = minimist(process.argv.slice(2))

const North = args.n
const South = args.s
const West = args.w
const East = args.e
const time = args.t
const days = args.d

if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}


if (args.n) { 
  console.log("no north")
    // Do whatever with arg[0] (the first argument)
}
if (args.s) { 
  console.log("no south")
    // Do whatever with arg[0] (the first argument)
}
if (args.w) { 
  console.log("no north")
    // Do whatever with arg[0] (the first argument)
}
if (args.e) { 
  console.log("no south")
    // Do whatever with arg[0] (the first argument)
}

const message_in = args.m
const message_out = commandy(message_in)

console.log(message_out)

// // Make a request
// const response = await fetch('URL_GOES_HERE');
// const data = await response.data()

// Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE
//     -h            Show this help message and exit.
//     -n, -s        Latitude: N positive; S negative.
//     -e, -w        Longitude: E positive; W negative.
//     -z            Time zone: uses tz.guess() from moment-timezone by default.
//     -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.
//     -j            Echo pretty JSON from open-meteo API and exit.