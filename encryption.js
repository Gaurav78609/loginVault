// utils/encryption.js
const CryptoJS = require("crypto-js");

const SECRET_KEY = "MySuperSecretKey123";

// Encrypt Password
const encryptPassword = (plainText) => {
  return CryptoJS.AES.encrypt(plainText, SECRET_KEY).toString();
};

//  Decrypt Password
const decryptPassword = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = {
  encryptPassword,
  decryptPassword,
};
