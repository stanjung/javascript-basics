
/* Notes:
    in the typescript we cannot assign the existing variable with data type string to number
    otherwise the javascript can do it
 */

var customerFirstName = "Sri"
var customerLastName = "Tanjung"
var customerAge = 31

// or we can assign the variable to a data type e.g.
var customerFirstName: string = "Sri"
var customerLastName: string = "Tanjung"
var customerAge: number = 31

// or we can assign to custom data type
type Customer = {firstName: string, lastName: string, active: boolean}
var firstCustomer: Customer = {
    firstName: "John",
    lastName: "Doe",
    active: true
    // we cannot add or change the values outside the custom data type
}
