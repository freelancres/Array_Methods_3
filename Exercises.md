
## EX1: Map to names


You have an array of  `user`  objects, each one has  `user.name`. Write the code that converts it into an array of names.

For instance:

``` let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */

console.log( names ); // John, Pete, Mary`

```



---------------------------



## EX2: Map to objects
You have two arrays of strings , each one has  `name`,  `surname`  and the `id` is index + 1.

Write the code to create another array from them, of objects with  `id`  and  `fullName`, where  `fullName`  is generated from  `name`  and  `surname`.

For instance:

```
let firstNames = [ "John", "Pete", "Mary" ];
let lastNames = [ "Smith","Hunt", "Key" ];

// id: is the index + 1

_let usersMapped = /* ... your code ... */_

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith`
```

So, actually you need to map one array of Strings to another.