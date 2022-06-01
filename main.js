/* -------------------------------------------------------------------------- */
/*                         Iterators Review Challenges                        */
/* -------------------------------------------------------------------------- */

/* --------------------------- 1. Practice Syntax --------------------------- */

/* ------------------------------ Capital Names ----------------------------- */

// const capitaliseFirstLetter = (array) => {
//   const capitalisedNames = array.map((name) => {
//     const lettersArray = name.split("");

//     const upperCaseFirstLetter = lettersArray[0].toUpperCase();
//     lettersArray.shift();
//     lettersArray.unshift(upperCaseFirstLetter);

//     return lettersArray.join("");
//   });

//   return capitalisedNames;
// };

// const namesArray = ["aiman", "nas", "ralf"];

// console.log(capitaliseFirstLetter(namesArray));

/* ------------------------------ Remove Vowels ----------------------------- */

// const removeVowels = (array) => {
//   const vowels = ["a", "e", "i", "o", "u"];

//   const onlyConsonantsArray = array.filter((letter) => {
//     return vowels.indexOf(letter) === -1;
//   });
//   return onlyConsonantsArray;
// };

// const lettersArray = ["a", "i", "m", "a", "n"];

// console.log(removeVowels(lettersArray));

/* ------------------------------ Mean Coaches ------------------------------ */

// const calculateAverage = (array) => {
//     const sum = array.reduce((a, b) => (a + b))
//     return sum / array.length;
// }

// const numbersArray = [25, 50, 175, 50];
// console.log(calculateAverage(numbersArray));

/* ----------------------- 2. Practice Problem Solving ---------------------- */

/* --------------------------- Spot the Difference -------------------------- */

// const filterShortWords = (array) => {
//     const longWordsOnlyArray = array.filter(words => {
//        return words.length > 5;
//     })
//     return longWordsOnlyArray;
// }

// const inputArray = ["spray", "limit", "disco", "exuberant", "destruction", "present"];
// console.log(filterShortWords(inputArray));

/* ------------------------------- Disco Shoes ------------------------------ */

// const convertToCamelCase = (array) => {
//     const noSpaceArray = array.map(words => words.split(" "))

//     const camelCaseArray = noSpaceArray.map(words => {
//         const secondWord = words[1];
//         const secondWordLetters = secondWord.split("");
//         const upperCaseFirstLetter = secondWordLetters[0].toUpperCase();

//         secondWordLetters.shift();
//         secondWordLetters.unshift(upperCaseFirstLetter);

//         const secondWordWithCapital = secondWordLetters.join("");

//         return `${words[0]}${secondWordWithCapital}`
//     })
//     return camelCaseArray;
// }

// const inputArray =["please camel", "join casing", "these disco", "with shoes"];
// console.log(convertToCamelCase(inputArray))

/* -------------------------------- Scrabble -------------------------------- */

const calculateScrabbleScore = (scrabbleWord) => {
    const scrabbleLettersValues = scrabbleWord.map(letter => Object.values(letter)[1]);
    const totalWordScore = scrabbleLettersValues.reduce((total, currentValue) => {
        return total + currentValue;
    })
    return totalWordScore;
}

const inputArray = [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];
console.log(calculateScrabbleScore(inputArray));
