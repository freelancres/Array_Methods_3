let arr = [];
let result;

// function sum(a, b, c) {
//     return a + b + c;
// };

// const sum = (a, b, c) => a + b + c;

// const sum = (a, b, c) => {
//     result = a * 2 + b * 9;
//     result = result ** c;
//     return result * 0.258;
// };

// console.log(sum(1, 20, 3));

//1-  Array lenght propety
arr = ["Salah", "Basem", "Souad", "Batoul"];
//result = arr.length;

//2- Iterate: forEach
let arr2 = [];
// arr.forEach(
//     (value, index,array) => {
//         console.log(value, index);
//         arr2.unshift(array[index]);

//     }
// );

// console.log(arr2);

//3- Searching in array :

// indexOf / lastIndexOf and includes
arr = [1, 0, false, 1];
result = arr.indexOf(false); // 2
result = arr.indexOf(null); // -1 means not present
result = arr.indexOf(1); // 0 : finds first occurence
result = arr.lastIndexOf(1); // 3: finds last occurence
result = arr.includes(false); // true : 'false' is included in arr

//find and findIndex/findLastIndex
arr = [
  { id: 1, name: "Talal", Salary: 25000 },
  { id: 2, name: "Mohammad", Salary: 20000 },
  { id: 3, name: "Ahmad", Salary: 35000 },
  { id: 4, name: "Nour", Salary: 0 },
];
// find the user with salary less than 24000
result = arr.find((item) => item.Salary < 24000); // Object
result = arr.findIndex((item) => item.Salary < 24000); // index: 1, first occurenece
result = arr.findLastIndex((item) => item.Salary < 24000); // index: 3 . last occurence

//filter
result = arr.filter((item) => item.Salary > 20000); // finds all items

//4- Transform an array
// map
arr = ["Kamal", "Omar", "Safwan", "Talal", "Nour", "Ahmad"];

result = arr.map((item, index) => {
  return {
    id: index + 1,
    name: item,
  };
});
// sort : modify in place
//arr = [4, 5, 1, 3, 2]
//result = arr.sort(); // ascending sort

//arr = ['Nour', 'Ahmad', 'Safwan', 'Ali'];
//result = arr.sort(); // ascending alphabetical sort

/**
 *
 * @param {Number} a : first value
 * @param {Number} b : second value
 * @returns {Number} :  a > b -> 1
 * @returns {Number} : a < b -> -1
 * @returns {Number} : a == b -> 0
 */

function compareNumeric(a, b) {
  if (a > b) return 1; //1: a after b
  if (a < b) return -1; // -1 : a before b
  if (a == b) return 0;// 0: no oreder defined
}

arr = [1024, 3, 78, 900, 54, 1];
result = arr.sort(compareNumeric);

/*----------------*/
/**
 * @description all even numbers must appear after of all odd numbers
 * @param {Number} a : first value
 * @param {Number} b : second Value
 * @returns 1 : a 'even' and b 'odd' 
 * @returns -1: a 'odd' and b 'even'
 * @returns 0: a 'even' and b 'even'
 */
function compare(a, b) {
  if (a % 2 == 0 && b % 2 != 0) return 1; // a after b
  if (a % 2 != 0 && b % 2 == 0) return -1; // a before b 
  if (a % 2 == 0 && b % 2 == 0) return 0; // no oreder

  
}

arr = [1, 7, 10, 9, 8, 13];
result = arr.sort(compare);

// reverse: modify in place
arr = ['one', 'two', 'three'];
result = arr.reverse();
// split and join
let strPeople = 'Anas, Hadi, Rami, Talal, Jamal';
let arrPeople = strPeople.split(', ',3);
//console.log(arrPeople);
//console.log(arrPeople.join(', '));

// reduce/reduceRight

const reducer = (previous, current, i) => {
  console.log(
    "previous: " + previous,
    "current: " + current,
    "current index: " + i
  );
  return previous + current;
};

arr = [1, 2, 3, 4, 5];
//result = arr.reduce(reducer, 5);

// result = arr.reduceRight(reducer, 5);


//5- Array.isArray: static method

let arrayInstance = new Array(1, 2, 3);
//console.log(arrayInstance);
arrayInstance.push(4); // instance method
let x = 10;

// exampels
result = Array.isArray(arrayInstance);
result = Array.isArray(x);
result = Array.isArray({ id: 1, value: 'HTML' });
result = Array.isArray([]);



//log results in Console
//console.log(arr);
// console.log(result);

let Obj = {};

Obj.greeting = 'Hello';
Obj['age'] = 23;
console.log(Obj);
