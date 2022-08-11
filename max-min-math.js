function returnMax(p, q, r) {

    max = Math.max(p, q, r);

    return max;
}

/// Minimum Number

function returnMin(p, q, r) {


    min = Math.min(p, q, r);

    return min;

}

const num1 = 20;

const num2 = 50;

const num3 = 305;

console.log("The elements are =", num1, num2, num3);

const maxNumber = returnMax(num1, num2, num3);
console.log();

console.log("The Max number is = ", maxNumber);

const minNumber = returnMin(num1, num2, num3);



console.log("The Min number is = ", minNumber);

console.log();