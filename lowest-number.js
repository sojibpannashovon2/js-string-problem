// Find the lowest number in array using function and return the value of the following function

function returnLowest(number) {

    min = number[0];
    for (let i = 0; i < number.length; i++) {

        const element = number[i];
        if (element < min) {
            min = element

        }
    }
    return min;


}
const lowestNumber = [100, 35, 50, 29, 70, 40];

console.log(lowestNumber);

const minimum = returnLowest(lowestNumber);

console.log("the lowest number is =", minimum);

