isLeapYear(){
    if(input % 4 == 0 && input % 100 != 0 || input % 400 == 0){
        console.log(input + " is a leap year.")
        return true
    } 
    else{
        console.log(input + " is not a leap year.")
        return false
    }
}



// DONT CHANGE. THIS IS FOR TESTING
let years = [ 2015, 1970, 1996, 1960, 2100, 1900, 2000, 2400, 1800]

for (let year of years) {
	console.log(isLeapYear(year)
}
