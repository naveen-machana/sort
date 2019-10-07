import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

/*const numbersCollection = new NumbersCollection([20, -3, -5, 10, 1]);
let sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charsCollection = new CharactersCollection('naveen');
sorter = new Sorter(charsCollection);
sorter.sort();
console.log(charsCollection.data);*/

const linkedList = new LinkedListCollection();
linkedList.add(5);
linkedList.add(-2);
linkedList.add(3);
linkedList.add(-4);

let sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
