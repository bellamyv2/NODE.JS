const fs = require("node:fs");

const message = "Hello Node\n";

fs.writeFileSync("welcome.txt", message, "utf8");
fs.writeFileSync("hello.txt", message, "utf8");
console.log(fs.readFileSync("hello.txt", "utf8"));
