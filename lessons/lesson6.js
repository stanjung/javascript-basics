// Conditional statement
// if(condition) {
//     // code here
// } else {
//     // code here
// }

/*
If hour between 6 and 12 print "Good Morning"
If hour between 12 and 18 print "Good Afternoon"
Otherwise: Good Evening
*/
var hour = 5
if (hour >= 6 && hour < 12){
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

// =========================
var ageIsMoreThanEighteen = false
var isIDCitizen = true

if (ageIsMoreThanEighteen && isIDCitizen){
    console.log('Customer is eligibe for DL')
} else {
    console.log('Customer is NOT eligibe for DL')
}