str2time
========

Simple JavaScript utility to convert humanized time like 9am to time format 09:00:00

#### Install

`npm install str2time`

###Usage

```
var str2time = require('str2time');

console.log(str2time('9am'));       //outputs 09:00:00
console.log(str2time('11:30p'));    //outputs 23:30:00
console.log(str2time('11:30:00'));  //outputs 11:30:00
```