// OBJECT

var customer = {
    firstname: 'Sri',
    lastname: 'Tanjung',
    cars: ["Honda", "Tesla", "Volvo"]
}

console.log(customer.firstname)
 //or
console.log(customer['lastname'])

//replace variable value
customer.firstname = "Pinyoy"
//or
customer['firstname'] = "Pinyoy"

//or print using interpolation
console.log(`${customer.firstname} ${customer.lastname}`)



// =============================================================//
// ARRAYS
var car = ["Honda", "Tesla", "Volvo"]
car[2] = "BMW"
console.log(car[0])
console.log(car[2])
console.log(customer.cars[1])
