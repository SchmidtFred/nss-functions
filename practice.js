const favoriteDogFunction = (breed) => {
    if (breed === "meow") {
        return "I like cats";
    } else {
     return `My favorite dog breed is ${breed}`;
    }
}

const myFavorite = favoriteDogFunction("mutt");

console.log(`When it comes to pets, ${myFavorite}`);

const add = (num1, num2, num3) => {
    if (num3) {
        console.log(num1 + num2 + num3);
    } else {
        console.log(num1 + num2);
    }
}

add(17, 4);
add(17, 4, 11);

const go = (direction, speed) => {
    let message = "";
    message += `The car is moving ${direction} at ${speed} mph.`
    if (speed > 75) {
        message += "SLOW DOWN!";
    }
    console.log(message);
}

go("backwards", 80);

const numArray = [4,5,78,34,1,213,543,7,44,6,10];

const evenOrOdd = (num) => {
    let result = "";
    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }
    console.log(result);
    return result;
}

evenOrOdd(0);

for (const number of numArray) {
    evenOrOdd(number);
}

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

const filterKWords = (wordArray) => {
    const newWordArray =[];
    for (const word of wordArray) {
        if (!word.startsWith("k") && !word.startsWith("K")) {
            newWordArray.push(word);
        }
    }
    return newWordArray;
}

const buildStringFromArray = (wordArray) => {
    return wordArray.join(" ");
}

const filteredArray = filterKWords(words);
const sentence = buildStringFromArray(filteredArray);
console.log(sentence);