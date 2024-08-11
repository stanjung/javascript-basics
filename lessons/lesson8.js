/*
 Declarative function
 we can call this function before or after the definition of function
*/
helloOne()
function helloOne(){ 
    console.log('Hello one!')
}

// helloYou()

/* 
 Anonymous function
 the function doesn't have a name
 we can call this function after the definition of function, error will be raised if it's called before
*/
var helloTwo = function(){ 
    console.log('Hello two!')
}
helloTwo()

/*
 ES5 function syntax or arrow function
 no need definition of function
 
*/
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

/*
 Function with argumnet
 it's means function with parameters
*/
function printName(firstname, lastname){
    console.log(firstname + ' is ' + lastname)
}
printName('Pinyoy', 'Tanjung')

// Function with return
function multipleByTwo(number){
    var result = number * 2
    return result
}
console.log(multipleByTwo(4))

// import function from another folder
import { printAge } from '../helpers/printHelper.js'
printAge(19)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(20)