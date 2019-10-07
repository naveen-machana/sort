import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([20, -3, -5, 10, 1]);
let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('naveen');
sorter = new Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);
