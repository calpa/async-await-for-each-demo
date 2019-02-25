const asyncForEach = require("../utils/asyncForEach");
const waitFor = require("../utils/waitFor");

asyncForEach([1, 2, 3], async num => {
  await waitFor(50);
  console.log(num);
});

console.log("Done");

// Done, 1, 2, 3
