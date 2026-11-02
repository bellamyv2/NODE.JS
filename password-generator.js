const passwordGenerator = require("generate-password");

function generateRandomPassword() {
  return passwordGenerator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });
}

console.log(generateRandomPassword());
