#!/usr/bin/env node

const readingRoute = require("./md-links");

const file = process.argv[2];
console.log('*Md-Links*')

readingRoute(file);




