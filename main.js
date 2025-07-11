// main.js

import { LinkedList } from './LinkedList.js';

const list = new LinkedList();

console.time("LinkedListTime");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");



console.log(list.toString());

console.timeEnd("LinkedListTime"); //The code run 10 to 30ms

