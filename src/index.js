
/**
 * import & export-  (modules)
 * this gives reusabilty of code we can export or import any data & access it
 */

import Basic from './basics';
import ArrFun from './arrowfunctions';
import builtFun from './methods';

// 1 -Method
import { products } from './view';
import { add, sub } from './math';

// 2 -Method
import multiply from './math';
import Animal from './class';
import Person from './static';

console.log("products=>" , products);   //products=> (3) ["Ring", "Neckless", "Bangles"]
console.log("Add =>" , add(10, 20));    //Add => 30
console.log("Subtract =>" , sub(78, 52));   //bundle.js:1133 Subtract => 26
console.log("Multiply =>" , multiply(10, 20)); // Mutiply => 200
console.log("Animals =>" , Animal); // Animals => Lion {name: "Lion", height: 6, color: "Golden"}



