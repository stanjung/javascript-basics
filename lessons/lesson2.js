// Concatenation and Interpolation

//replace cup and price in the message to use variable
var price = 50
var itemName = "Cup"
var message = "The price for your " + itemName + " is "+ price +" dollars" // concatination
var message2 = `The price for your ${itemName} is ${price} dollars` // interpolcation
console.log(message)
console.log(message2)
