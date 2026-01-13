// This index.js should be only named as index.js, not any other name,
//  this is the rule in requiring directories.

const apple = require("./apple");
const banana = require("./banana");
const mango = require("./mango");

let fruits = [apple, banana, mango];
module.exports = fruits;



