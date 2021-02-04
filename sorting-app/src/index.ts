import { Sorter } from './Sorter.js'
import { NumbersCollection } from './NumbersCollection.js';
import { CharactersCollection } from './CharactersCollection.js';

 
const charactersCollection = new CharactersCollection('asdasdXXba');
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)
