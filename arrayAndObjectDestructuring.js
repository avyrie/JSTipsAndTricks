// *** Destructuring arrays ***

const words = ['This', 'That', 'The Other', 'Those', 'Them', 'There']
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let [first item, second item, third item, fourth item, fifth item] = array
let [a, b] = words;
console.log(a)
console.log(b)

// ,, means to skip the item in the next position
let [f,, h] = words;
console.log(f)
console.log(h)

let [r, l,, k] = words;
console.log(r)
console.log(l)
console.log(k)

// Spread operator
let [ q, w, ...rest] = words;
console.log(q)
console.log(w)
console.log(rest)

// Combines arrays
const newArray = [...alphabet, ...numbers]
console.log(newArray)
// Can also use .concat to do the same thing
const newArr = alphabet.concat(numbers)
console.log(newArr)

sumAndMultiply = (a, b) => ([a+b, a*b, a/b])
// sumAndMultiply = (a, b) => ([a+b, a*b])

// if there were no a/b and we console.log(division) the output would be No division
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3)
console.log(sum)
console.log(multiply)
console.log(division)




// *** Destructuring objects ***

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Fairax',
        state: 'Virginia'
    }
}
// const { name, age } = personTwo;
// console.log(name)

// Can reassign variable (ex. changing 'name' to 'firstName')
const { name: firstName, age } = personTwo;
console.log(firstName)



// Thank you to: https://www.youtube.com/watch?v=NIq3qLaHCIs
