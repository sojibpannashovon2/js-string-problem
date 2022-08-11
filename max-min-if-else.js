function returnMax(p, q, r) {

    if (p > q && p > r) {
        // console.log("P is greater than q & r");
        return p;
    }

    else if (q > p && q > r) {
        // console.log("Q is greater than q & r");
        return q;
    }

    else {
        // console.log("R is greater than q & r");
        return r;
    }

}

/// Minimum Number

function returnMin(p, q, r) {

    if (p < q && p < r) {
        // console.log("P is greater than q & r");
        return p;
    }

    else if (q < p && q < r) {
        // console.log("Q is greater than q & r");
        return q;
    }

    else {
        // console.log("R is greater than q & r");
        return r;
    }


}

const num1 = 20;

const num2 = 50;

const num3 = 35;

console.log("The elements are =", num1, num2, num3);

const maxNumber = returnMax(num1, num2, num3);
console.log();

console.log("The Max number is = ", maxNumber);

const minNumber = returnMin(num1, num2, num3);



console.log("The Min number is = ", minNumber);

console.log();