#!/usr/bin/env node

var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs-prebuilt')
var binPath = phantomjs.path

var childArgs = [ path.join(__dirname, 'phantom.js') ];

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  console.log(err)
  console.log(stdout)
  console.log(stderr);
})


setInterval(() => {});
