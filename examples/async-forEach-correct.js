const asyncForEach = require("../utils/asyncForEach");
const waitFor = require("../utils/waitFor");

const start = async () => {
  await asyncForEach([1, 2, 3], async num => {
    await waitFor(50);
    console.log(num);
  });
  console.log("Done");
};
start();
