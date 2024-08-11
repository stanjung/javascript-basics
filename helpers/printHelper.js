export function printAge(age){
    console.log(age)
}

class CustomerDetails {
    printFirstName(firstName){
        console.log(firstName)
    }


    /**
     * This method is used to print last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()