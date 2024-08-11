//  Logical "AND"
console.log(true && true) // all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) // any value have to be TRUE for expression to be TRUE

// ===========================
var ageIsMoreThanEighteen = false
var isIDCitizen = true

var eligibilityForDrivenLicense = ageIsMoreThanEighteen || isIDCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDrivenLicense)

//  Logical "NOT"
console.log(!true)
console.log(6 !== 10)
