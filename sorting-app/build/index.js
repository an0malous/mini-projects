"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_js_1 = require("./Sorter.js");
var CharactersCollection_js_1 = require("./CharactersCollection.js");
var charactersCollection = new CharactersCollection_js_1.CharactersCollection('asdasdXXba');
var sorter = new Sorter_js_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
