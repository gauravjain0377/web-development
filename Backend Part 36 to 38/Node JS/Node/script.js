// Module Exports


// let n = 5;

// for(let i = 0; i < n; i++) {
//     console.log(i);
// }

// console.log("Hello");




// let args = process.argv;

// for(let i =0; i<args.length; i++) {
//     console.log("Hello & Welcome to", args[i]);
// }




// const math = require("./math");
// console.log(math.sum(2,5));
// console.log(math.mul(2,5));
// console.log(math.g);
// console.log(math.pi);




// const fruits = require("../Node/Fruits");
// console.log(fruits);



// import { sum, pi} from "./math.js"
// console.log(sum(1,4), pi);



import { generate, count } from "random-words";
console.log(generate());
console.log(generate({ exactly: 2, minLength: 3, maxLength: 3 }));
console.log(count({ maxLength: 7 }));