// *** JavaScript Array Methods ***

const items = [
    {name: 'Bike', price: 100},
    {name: 'Tv', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
];

// *** Filter ***
const filteredItems = items.filter((item) => {
    return item.price <= 100
});
console.log(filteredItems);
// * creates an array of items that meet the specified statement



// *** Map ***
const mappedItems = items.map((item) => {
    return item.name
});
console.log(mappedItems);
// * creates an array of just those values specified



// *** Find ***
const foundItem = items.find((item) => {
    return item.name === 'Book'
});
console.log(foundItem);
// * will return first item it finds in an array that returns true for the statement you pass inside the .find function



// *** For Each ***
items.forEach((item) => {
    console.log(item.name)
});
// * does something for every single item in the array



// *** Some ***
const cheapItems = items.some((item) => {
    return item.price <= 100
});
console.log(cheapItems);
// * checks if ANY items in the array return true for the specified statement and returns true if yes, false if no



// *** Every ***
const cheapItems2 = items.every((item) => {
    return item.price <= 100
});
console.log(cheapItems2);
// checks if EVERY item in the array returns true for the specified statement and returns true if yes, false if no



// ** Reduce ***
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);
console.log(totalPrice);
// currentTotal = property that we want to reduce everything into - the total after each iteration of the array - first parameter of function is whatever the previous iteration of the array returned
// item is each actual item in the array
// 0 is the starting point



// *** Includes ***
const newItems = [1, 2, 3, 4, 5, "six"];
// const newItems = [1, 2, 3, 4, 5]
const includesTwo = newItems.includes(2);
console.log(includesTwo);
// * checks to see if the array being passed includes the argument, returns true if yes


// Thank you to: https://www.youtube.com/watch?v=R8rmfD9Y5-c


// *** Push ***
const nums = [1, 2, 3, 4];
nums.push('five');
console.log(nums);
// adds a specified value to the END of a given array


// *** Pop ***
nums.pop();
console.log(nums);
// removes the LAST value in a given array


// *** Unshift ***
nums.unshift('one');
console.log(nums);
// adds a specified value to the BEGINNING of a given array


// *** Shift ***
nums.shift();
console.log(nums);
// removes the FIRST value in an array


// *** Concat ***
const nums2 = ['one', 'two', 'three', 'four', 'five'];
let newArr = nums.concat(nums2);
console.log(newArr);
let newArr2 = nums.concat(nums2, newArr);
console.log(newArr2);
// creates a new array by combining two or more arrays (adds to the end of the array which concat is acting on)


// *** Slice ***
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums3.slice(2));
// creates new array containing items in array from index 2 in original array onward
console.log(nums3.slice(1, 7));
// creates new array containing only items between indices 1 and 7 in original array (including item at index 1, but not including item at index 7)


// *** Splice ***
let splice = nums3.splice(2);
console.log(splice);
console.log(nums3);
// removes everything, but the first two items from an array and puts the values in a separate array leaving the original array with only the first two items
const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums4.splice(2, 3));
console.log(nums4)
// removes 3 items from original array starting at index 2 and puts them in a separate array leaving the original array without those items
const nums5 = [1, 2, 3, 4, 5];
console.log(nums5.splice(1, 2, 'five'));
console.log(nums5);;
// removes 2 items from original array starting at index 1 and leaves 'five' in their place. This creates a new array containing the removed items and alters the original array so the removed items are replaced with 'five'



// *** Sort ***
const newNums = [5, 8, 3, 1, 5, 0, 3, 2, 1];
console.log(newNums.sort())
console.log(newNums)
// alters existing array so numerical values are placed in order from least to greatest
