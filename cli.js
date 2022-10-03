#!/usr/bin/env node
import minimist from "minimist";
import moment from "moment-timezone";
import fetch from "node-fetch";

//run from command line using node cli.js

const args = minimist(process.argv.slice(2))
const timezone = moment.tz.guess();
var Latitude;
var Longitude;
const days = 0;

if (args.h){
  console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE");
  console.log("     -h            Show this help message and exit.");
  console.log("     -n, -s        Latitude: N positive; S negative.");
  console.log("     -e, -w        Longitude: E positive; W negative.");
  console.log("     -z            Time zone: uses tz.guess() from moment-timezone by default.");
  console.log("     -d 0-6        Day to retrieve weather: 0 is today; defaults to 1.");
  console.log("     -j            Echo pretty JSON from open-meteo API and exit.");
  // exit 0;
}

//process days
if (args.d){
  if (args.d > 6 || args.d < 0){
    days = 0
  }
  else{
    days = args.d
  }
}

//process lat and long
if (args.n) { 
  // console.log("we have north: " + args.n)
  Latitude = args.n
}
if (args.s) { 
  // console.log("we have south: " + args.s)
  Latitude = -args.s
}
if (args.w) { 
  // console.log("we have west: " + args.w)
  Longitude = -args.w
}
if (args.e) { 
  // console.log("we have east: " + args.e)
  Longitude = args.e
}

// process timezone
if (args.z){
  timezone = args.z
}

//get date and add days to it
var date = new Date();
date.setDate(date.getDate() + days);

// Get year, month, and day part from the date
var year = date.toLocaleString("default", { year: "numeric" });
var month = date.toLocaleString("default", { month: "2-digit" });
var day = date.toLocaleString("default", { day: "2-digit" });
const start_date = year + '-' + month + '-' + day


// Make a request
const my_url = 'https://api.open-meteo.com/v1/forecast?latitude=' + Latitude + '&longitude=' + Longitude + '&daily=temperature_2m_max,temperature_2m_min,sunset,precipitation_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=' + timezone +'&start_date=' + start_date + '&end_date=' + start_date
const response = await fetch(my_url);
const data = await response.json()

//process response data
const high = data['daily']['temperature_2m_max']
const high_units = data['daily_units']['temperature_2m_max']
const low = data['daily']['temperature_2m_min']
const low_units = data['daily_units']['temperature_2m_min']

console.log("The high will be " + high + high_units)
console.log("The low will be " + low + low_units)


if (days == 0) {
  console.log("today.")
} else if (days > 1) {
  console.log("in " + days + " days.")
} else {
  console.log("tomorrow.")
}
