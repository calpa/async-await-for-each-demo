const waitFor = require("../utils/waitFor");

const start = async () => {
  await Promise.all(
    [1, 2, 3].map(async num => {
      await waitFor(50);
      console.log(num);
    })
  );
  console.log("Done");
};
start();

// Output: 1, 2, 3, Done
