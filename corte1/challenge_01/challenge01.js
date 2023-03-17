/*Create a new function in Regular and Arrow types, 
which should receive a number and will print in 
console if that number is either odd or even*/

const number = 2;

const isEvenArrowF = (number) => {
    return number % 2 === 0 ? "even":"odd";
}
console.log(isEvenArrowF(number));

const isEvenNormalF = function(number){
    if(number % 2 === 0){
        return "even"
    }
    return "odd"
}
console.log(isEvenNormalF(number));