"use strict";

const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

let
  counter = 0;

if (!filename) {
  throw Error("Usage: on argument: filename to watch");
}


process.on( "SIGINT", function() {
  console.log(`fs.watch fired ${counter} times.`);
  process.exit();
});

fs.watch(filename,  function() {
  counter++;
  let ls = spawn('ls', [ '-lh', filename ]);
  ls.stdout.pipe( process.stdout );
});

console.log(`watching ${filename} for changes`);
