const fs = require("fs");
const crypto = require("crypto");

function waitFor(time = 1000) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

let start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;
let heavyCalc = async (x) => {
  console.log("start", x);

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
};

let x = 0;
while (x <= 20) {
  setTimeout(() => {
    x += 1;

    heavyCalc(x);
  }, 0);
}
console.log(123);
