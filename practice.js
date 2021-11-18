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

const svenFishing = (odds) => {
    // this is to convert the odds to a decimal if they were not already inputed in as a decimal percentage
    if (odds > 1) {
        odds = odds/100;
    }
    const fishResult = Math.random();
    //if the result is less than the decimal version of the odds...it has hit the threshold
    if (fishResult < odds) {
        console.log("Sven hooked a tuna! :)");
    } else {
        console.log("Sven came up empty-handed. :(");
    }
}

svenFishing(33);
svenFishing(33);
svenFishing(90);

const orderMeal = (entree, dessert, drink, side) => {
    return {
        sandwich: entree,
        side: side,
        drink: drink,
        dessert: dessert
    }
}

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges");
console.log(takeOutBag);

const takeOutTrash = (person) => {
    return `${person.firstName} ${person.lastName} took out the trash`;
}

const doDishes = (person) => {
    return `${person.firstName} ${person.lastName} cleaned the dishes`;
}

const feedCats = (person) => {
    return `${person.firstName} ${person.lastName} fed the cats`;
}

const vacuumFloors = (person) => {
    return `${person.firstName} ${person.lastName} vacuumed the floors`;
}

const sweptTheDeck = (person) => {
    return `${person.firstName} ${person.lastName} swept the deck`;
}

const cleanBathrooms = (person) => {
    return `${person.firstName} ${person.lastName} cleaned the bathrooms`;
}

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
    return `On ${day}, ${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}.`;
}

const fred = {
    firstName: "Fred",
    lastName: "Schmidt"
}

console.log(dayPlanner(vacuumFloors, feedCats, cleanBathrooms, fred, "Saturday"));