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
})
console.log(filteredItems)
// * creates an array of items that meet the specified statement



// *** Map ***
const mappedItems = items.map((item) => {
    return item.name
})
console.log(mappedItems)
// * creates an array of just those values specified



// *** Find ***
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(foundItem)
// * will return first item it finds in an array that returns true for the statement you pass inside the .find function



// *** For Each ***
items.forEach((item) => {
    console.log(item.name)
})
// * does something for every single item in the array



// *** Some ***
const cheapItems = items.some((item) => {
    return item.price <= 100
})
console.log(cheapItems)
// * checks if ANY items in the array return true for the specified statement and returns true if yes, false if no



// *** Every ***
const cheapItems2 = items.every((item) => {
    return item.price <= 100
})
console.log(cheapItems2)
// checks if EVERY item in the array returns true for the specified statement and returns true if yes, false if no



// ** Reduce ***
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(totalPrice)
// currentTotal = property that we want to reduce everything into - the total after each iteration of the array - first parameter of function is whatever the previous iteration of the array returned
// item is each actual item in the array
// 0 is the starting point



// *** Includes ***
const newItems = [1, 2, 3, 4, 5, "six"]
// const newItems = [1, 2, 3, 4, 5]
const includesTwo = newItems.includes(2)
console.log(includesTwo)
// * checks to see if the array being passed includes the argument, returns true if yes


// Thank you to: https://www.youtube.com/watch?v=R8rmfD9Y5-c