

function returnReverseWord(line) {

    const words = line.split(' ');
    console.log(words);

    const anotherline = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const index = words[i];
        anotherline.push(index);

    }
    console.log(anotherline);

    const reversed = anotherline.join(' ');

    console.log(reversed);

}


const line = "I am a fat man";

console.log(line);

const reverse_word = returnReverseWord(line);