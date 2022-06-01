/* -------------------------------------------------------------------------- */
/*                         Iterators Review Challenges                        */
/* -------------------------------------------------------------------------- */

/* --------------------------- 1. Practice Syntax --------------------------- */

/* ------------------------------ Capital Names ----------------------------- */

const capitaliseFirstLetter = (array) => {
  const capitalisedNames = array.map((name) => {
    const lettersArray = name.split("");

    const upperCaseFirstLetter = lettersArray[0].toUpperCase();
    lettersArray.shift().unshift(upperCaseFirstLetter);

    return lettersArray.join("");
  });

  return capitalisedNames;
};

const namesArray = ["aiman", "nas", "ralf"];

// console.log(capitaliseFirstLetter(namesArray));

/* ------------------------------ Remove Vowels ----------------------------- */

const removeVowels = (array) => {
  //   const onlyConsonantsArray = array.filter((letter) => {
  //     switch (letter) {
  //         case "a":
  //             false;
  //             break;
  //         case "e":
  //             false;
  //             break;
  //         case "i":
  //             false;
  //             break;
  //         case "o":
  //             false;
  //             break;
  //         case "u":
  //             false;
  //             break;
  //         default:
  //             true;
  //             break;
  //     }
  //   });
  //   return onlyConsonantsArray;

  const vowels = ["a", "e", "i", "o", "u"];
  console.log(vowels.indexOf("m"));
  console.log(vowels.indexOf("a"));  
  const onlyConsonantsArray = array.filter((letter) => {
    vowels.indexOf(letter) === -1;
  });
  return onlyConsonantsArray;
};

const lettersArray = ["a", "i", "m", "a", "n"];

console.log(removeVowels(lettersArray));
