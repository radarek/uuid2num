var seedrandom = require('seedrandom');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin
});

rl.on("line", function(line) {
  var rng = seedrandom(line);
  var rnd = rng();
  var scaled = Math.floor(rnd * 100)
  console.log(scaled);
});

