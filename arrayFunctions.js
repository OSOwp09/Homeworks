//----- at method ------------------
/* takes an integer value and returns the item
at that index, allowing for positive and negative integers.
Negative integers count back from the last item in the array. */

var array1 =[1,2,3,4,5];

//return last item of the array
console.log(array1.at(-1))

//return first item of the array
console.log(array1.at(0))

//return second last item of the array
console.log(array1.at(-2))

//return second item of the array
console.log(array1.at(1))

//----------------------------------
//----- concat method --------------
/* is used to merge tow or more arrays. this method does
not change the existing arrays, but instead returns new array */

const array2 = [6,7,8];


console.log(array1.concat(array2));

//----------------------------------
//----- constructor method ---------
/* is used to create Array objects.*/

const array3 = new Array(9,10,11);

console.log(array3);

//----------------------------------
//----- copyWithin method ---------- No lo entiendo
/* shallow copies part of an array to another location
in the same array and returns it without modifying its lenght*/

const array4 = [1,2,3,4,5];

// Copy to index 0 the element at index 3
console.log(array4.copyWithin(0,3,4));

// Copy to index 1 all elements from index 3 to the end
console.log(array4.copyWithin(1, 3));

//----------------------------------
//----- entries method -------------
/* returns a new Array Iterator object that contains the 
key/value pairs for each index in the array.*/

const array6 =['a', 'b', 'c'];

console.log(array6.entries().next().value);

//for loop1
for (const [index, element] of array6.entries()) {
    console.log(index, element);
}

//for loop2
const arrayEntries = array6.entries();

for (const element of arrayEntries) {
    console.log(element);
}

//----------------------------------
//----- every method ---------------
/*The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const array7 = [1, 30, 39, 29, 10, 13];

console.log(array7.every(isBelowThreshold));

//----------------------------------
//----- every method ---------------
/*The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled. */

//Fill all the elements with a value:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi"));

//Fill the last three elements:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.fill("Kiwi", 1 ,41));

//----------------------------------
//----- filter method---------------
/*The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.*/

const ages = [32, 33, 16, 40];
const checkAdult = (currentValue) => currentValue >= 18;

console.log(ages.filter(checkAdult))

//----------------------------------
//----- find method---------------
/*The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.*/

console.log(ages.find(x => x >= 18))

//----------------------------------
//----- findIndex method------------
/*The findIndex() method executes a function for each array element.

The findIndex() method returns the index (position) of the first element that passes a test.

The findIndex() method returns -1 if no match is found.

The findIndex() method does not execute the function for empty array elements.

The findIndex() method does not change the original array.*/

console.log(ages.findIndex(x => x >= 18))

//----------------------------------
//----- findLast method--------------
/*iterates the array in reverse order and returns the value of the first element 
that satisfies the provided testing function. If no elements satisfy the testing 
function, undefined is returned.*/

const array8 = [5, 12, 50, 130, 44];

//console.log(array8.findLast((element) => element > 45));


//----------------------------------
//----- findLastIndex method--------
/*iterates the array in reverse order and returns the index of the first element 
that satisfies the provided testing function. If no elements satisfy the testing 
function, -1 is returned.*/

const array9 = [5, 12, 50, 130, 44];

//console.log(array9.findLastIndex((element) => element > 45));

//----------------------------------
//----- flat method--------
/*creates a new array with all sub-array elements concatenated into it 
recursively up to the specified depth.*/

const array10 = [0, 1, 2, [3, 4]];

console.log(array10.flat());

const array11 = [0, 1, 2, [[[3, 4]]]];

console.log(array11.flat(2));

//----------------------------------
//----- flatMap method--------
/*returns a new array formed by applying a given callback function to 
each element of the array, and then flattening the result by one level. 
It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), 
but slightly more efficient than calling those two methods separately.*/
const array12 = [1, 2, [3], [4, 5], 6, []];

const flattened = array12.flatMap(num => num);

console.log(flattened);

//----------------------------------
//----- forEach method--------
/*The forEach() method calls a function for each element in an array.

The forEach() method is not executed for empty elements.*/
const array13 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
    console.log(i);
}
// after
items.forEach((item) => {
    console.log(item);
});

//----------------------------------
//----- from method ----------------####################
/*creates a new, shallow-copied Array instance from an iterable or 
array-like object.*/ 

console.log(Array.from('foo'));

console.log(Array.from([1, 2, 3], x => x + x));

//----------------------------------
//----- includes method -------------
/*The includes() method returns true if an array contains a specified value.

The includes() method returns false if the value is not found.

The includes() method is case sensitive.*/

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.includes("Mango"));

//----------------------------------
//----- indexOf method -------------
/*The indexOf() method returns the first index (position) of a specified value.

The indexOf() method returns -1 if the value is not found.

The indexOf() method starts at a specified index and searches from left to right.

By default the search starts at the first element and ends at the last.

Negative start values counts from the last element (but still searches from left to right).*/

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

//Find the first index of "Apple"
console.log(fruits4.indexOf("Apple"));

//Doesn't found "Kiwi"
console.log(fruits4.indexOf("Kiwi"));

//Start at index #
console.log(fruits4.indexOf("Apple",2));
console.log(fruits4.indexOf("Apple",3));

//----------------------------------
//----- isArray method -------------############################
/*The isArray() method returns true if an object is an array, otherwise false.*/

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruits));

const text = "W3Schools";
console.log(Array.isArray(text));

//----------------------------------
//----- join method ----------------
/*The join() method returns an array as a string.

The join() method does not change the original array.

Any separator can be specified. The default is comma (,).*/

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));

console.log(elements.join('_'));

console.log(elements.join('º'));

console.log(elements.join(' and '));

//----------------------------------
//----- keys method ---------------- No lo entiendo
/*The keys() method returns an Array Iterator object with the keys of an array.

The keys() method does not change the original array.*/

const array14 = ['a', 'b', 'c'];
const iterator = array14.keys();

for (const key of iterator) {
    console.log(key);
}

//----------------------------------
//----- lastIndexOf method ----------------

