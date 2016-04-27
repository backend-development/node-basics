"use strict";

let count = 1;

process.on( "SIGHUP", function() {
  console.log(`count = ${count}`);
});


process.on( "SIGINT", function() {
  console.log(`stopping because of [SIGINT] at count = ${count}`);
  process.exit();
});


function work() {
  count++;
  process.stdout.write(". ");
  if (count < 1000000) {
    setTimeout(work, 1000);
  } else {
    console.log("done");
  }
}

console.log(`starting the work. this is process ${process.pid}`);
setTimeout(work, 1000);
