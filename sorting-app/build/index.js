"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_js_1 = require("./Sorter.js");
var NumbersCollection_js_1 = require("./NumbersCollection.js");
var numbersCollection = new NumbersCollection_js_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_js_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
