process.env.UV_THREADPOOL_SIZE = 2;

const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();
let count = 1;
function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("Request:", Date.now() - start);
      });
    })
    .end();
}
function doHash() {
  crypto.pbkdf2("a", "b", 900000, 512, "sha512", () => {
    console.log("Hash:" + count, Date.now() - start);
    count += 1;
  });
}

doRequest();

fs.readFile("multitask.js", "utf8", () => {
  console.log("fs:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
doHash();
doHash();

doHash();
doHash();
doHash();
doHash();
