'use strict';

// const arr = ['orange', 'pineapple', 'orange'];
// const fruits = new Set(arr);

// console.log(fruits)

// const uniqueIds = new Set([1,2,3,4,4,5,5,6,7]);

// console.log('uniqueIds: ', uniqueIds);
// console.log('uniqueIds size: ', uniqueIds.size);

// uniqueIds.add(8)

// console.log('uniqueIds: ', uniqueIds);
// console.log('uniqueIds size: ', uniqueIds.size);

// console.log('uniqueIds has: ', uniqueIds.has(9))
// console.log('uniqueIds has: ', uniqueIds.has(8))

// uniqueIds.delete(8);

// console.log('uniqueIds: ', uniqueIds);
// console.log('uniqueIds size: ', uniqueIds.size);

// uniqueIds.clear();
// console.log('uniqueIds: ', uniqueIds);


// fruits.forEach((fruit, fruitAgain, coll) => {
//     console.log('set: ', fruit, fruitAgain, coll)
// })

// arr.forEach((fruit, fruitAgain, array) => {
//     console.log('arr: ', fruit, fruitAgain, array)
// })

// const arr = ['orange', 'pineapple', 'orange'];
// const fruits = new Set(arr);

// for(let value of fruits) {
//     console.log(value)
// }

// const cheapShirt = { size: 'L', color: 'white' };
// const fancyShirt = { size: 'L', color: 'white' };

// console.log(cheapShirt === fancyShirt);
// console.log(cheapShirt === cheapShirt);

// const set = new Set([cheapShirt, cheapShirt, fancyShirt]);
// const set2 = new Set([{}, {}, {}]);
// console.log(set2);

// const set = new Set([1,2,3,4,4,5,5,6,7])
// const nums = [1,2,3,4,4,5,5,6,7];
// const uniqueIds = [...new Set([1,2,3,4,4,5,5,6,7])];
// console.log(set)
// console.log(uniqueIds)

// [1,2,3,4,4,5,5,6,7] + ... = 1,2,3,4,4,5,5,6,7
// [1,2,3, [1,2,3]] + ... = 1,2,3,[1,2,3]
// const deepArray = [1,2,3,4,[1,2,3,5, [3454564]]];
// console.log(deepArray.flat(Infinity));

const user = {
    id: 1,
    name: "John",
    role: "Software Engineer",
    age: 10,
    true: 'asdsa',
};

const userMap = new Map([
    ['id', 1],
    ['name', 'John'],
    ['role', 'Software Engineer'],
    ['age', 10],
    ['Name Book', "Author Book"]
]);

// console.log(user.name)

// function functionLikeKey() {
//     return 123
// }

// userMap.set(true, 'test string')
// userMap.set(functionLikeKey, 'value of function')
// console.log(userMap)

// console.log(userMap.get('Name Book'))

// for(let key of Object.keys(user)) {
//     console.log('user: ', key)
// }

// for(let key of userMap.keys()) {
//     console.log('userMap key: ', userMap.get(key))
// }

// for(let value of userMap.values()) {
//     console.log('userMap value: ', value)
// }

// for(let el of userMap) {
//     console.log('userMap el: ', el)
// }

// userMap.forEach((value, key, map) => {
//     console.log(value, key, map)
// })

// let john = {name: 'John'};
// const arr = [john];

// console.log(john)
// console.log(arr)

// const weakMap = new WeakMap();
// // weakMap.set(john, '...')

// john = null;

// let sum = 0;

// for(let i = 0; i < 100000000; i++) {
//     sum+=i;
// }

// console.log(john)
// // console.log(weakMap)
// console.log(arr)
