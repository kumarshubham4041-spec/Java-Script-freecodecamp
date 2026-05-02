//Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

//User Stories:

//Define a function called isLeapYear that takes a number as an argument.Outside the function, declare a variable year that stores the value of the year you want to check.Inside the function, use an if/ else statement or a ternary operator to check if the year is a leap year.To check if the year is a leap year, fulfill the following conditions:

//If the year is divisible by 4, then it is a leap year.
//Unless the year is also divisible by 100, then it is not a leap year.
//Unless the year is also divisible by 400, then it is a leap year.
//If the year is a leap year, return [year] is a leap year.. Otherwise, return [year] is not a leap year.. You will replace [year] with the parameter defined in the isLeapYear function.

//You should call the isLeapYear function with year as the argument and assign the result to a variable named result.

//You should output the result variable to the console using console.log().

function isLeapYear(number){
  if (number%4===0 && number%100 !== 0 || number%400=== 0){
    return `${number} is a leap year.`;
  }
  else{
    return `${number} is not a leap year.`
  }
};

let year=2024;
let result =  isLeapYear(year) ;
console.log(result)
