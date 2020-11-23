// *** JavaScript Object Methods ***

const instructor = {
    fName: 'Kelly',
    isInstructor: true,
    favNums: [1, 2, 3, 4]
}

// *** Object.keys ***
console.log(Object.keys(instructor))
// returns an array containing the keys in a given object


// *** Object.values ***
console.log(Object.values(instructor))
// returns an array containing the values in a given object


// *** Object.entries ***
console.log(Object.entries(instructor))
// returns an array containing the keys and values (pairs) in a given object


// *** hasOwnProperty ***
console.log(instructor.hasOwnProperty('fName'))
// returns true if the object contains the stated property (key), false if not 


// *** Object.create ***
console.log(instructor)
const me = Object.create(instructor)
console.log(me.fName)
console.log(me.isInstructor)
me.fName = 'Ally';
me.lName = 'Pittman';
console.log(instructor.lName)
me.isInstructor = false;
console.log(me.favNums)
console.log(me.fName)
console.log(me.lName)
console.log(me.isInstructor)
// creates an object by using a previously existing object as a template