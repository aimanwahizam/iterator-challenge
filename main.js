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

// const calculateScrabbleScore = (scrabbleWord) => {
//     const scrabbleLettersValues = scrabbleWord.map(letter => Object.values(letter)[1]);
//     const totalWordScore = scrabbleLettersValues.reduce((total, currentValue) => {
//         return total + currentValue;
//     })
//     return totalWordScore;
// }

// const inputArray = [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];
// console.log(calculateScrabbleScore(inputArray));

/* -------------------------- 3. Arrays and Objects ------------------------- */

/* -------------------------------- Mi to Km -------------------------------- */

// const convertMiToKm = (array) => {
//     const KmArray = array.map(miles => miles * 1.60934);

//     const TotalKm = KmArray.reduce((total, currentValue) => {
//         return total + currentValue;
//     });

//     return `{convertedKM: [${KmArray}], totalKM: ${TotalKm}}`;
// }

// const inputArray = [10, 5];
// console.log(convertMiToKm(inputArray));

/* ------------------------------- Filter Food ------------------------------ */

// const filterFoodByType = (array, filter) => {
//   const filteredFoods = array.filter((food) => {
//     if (food.foodType === filter) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   return filteredFoods;
// };

// const inputArray = [
//   { img: "🍕", name: "pizza", foodType: "junk" },
//   { img: "🍔", name: "burger", foodType: "junk" },
//   { img: "🍟", name: "fries", foodType: "junk" },
//   { img: "🌭", name: "hot dog", foodType: "junk" },
//   { img: "🥗", name: "salad", foodType: "healthy" },
//   { img: "🥙", name: "pita", foodType: "healthy" },
//   { img: "🥪", name: "sandwich", foodType: "healthy" },
//   { img: "🌯", name: "burrito", foodType: "healthy" },
//   { img: "🥣", name: "soup", foodType: "healthy" },
// ];

// console.log(filterFoodByType(inputArray, "junk"));
// console.log(filterFoodByType(inputArray, "healthy"));

/* ----------------------------- We cab be Heros ---------------------------- */

// const createHeroObject = (array) => {
//     const HeroObjects = array.map(hero => {
//         const heroId = array.indexOf(hero);
//         const heroName = hero.name;
//         const power = Math.floor(Math.random() * 10);

//         return `{id: ${heroId}, hero: ${heroName}, power: ${power}}`;
//     })

//     return HeroObjects;
// };

// const inputArray = [
//   { name: "Spider-Man" },
//   { name: "Thor" },
//   { name: "Black Panther" },
//   { name: "Captain Marvel" },
//   { name: "Silver Surfer" },
// ];

// console.log(createHeroObject(inputArray));
