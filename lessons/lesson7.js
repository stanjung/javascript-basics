// Loops
i = 10
for (let i=0; i < 5; i++){
    console.log('Hello Tanjung!' + i)
}

console.log(i)

// for of loop
var cars = ["Volvo", "Tesla", "Honda"]
for (let car of cars) {
    console.log(car)
    if(car == "Tesla"){
        break
    }
}

// ES6 syntax for each loop
cars.forEach(car =>{
    console.log(car)
})