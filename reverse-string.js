
function retrunReverseString(item) {


    let reversed = '';
    for (let i = item.length - 1; i >= 0; i--) {
        const element = item[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }

    return reversed;

}

const string = "I am a good boy";

//console.log(string);

const reverseTheString = retrunReverseString(string);
console.log();

console.log(reverseTheString);