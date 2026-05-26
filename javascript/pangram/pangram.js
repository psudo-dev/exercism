// export const isPangram = (phrase) => {
//   const abc = "abcdefghijklmnopqrstuvwxyz"
//   const abcArray = abc.split("")
//   const array =[]
//   abcArray.forEach(letter => {
//     if (!phrase.toLowerCase().trim().includes(letter)) {
//         array.push(letter)
//       }
//   })
//   return array.length > 0 ? false : true
// };

export const isPangram = (phrase) => ("abcdefghijklmnopqrstuvwxyz")
  .split("") // turn the string into an array
  .every(letter => phrase // check if all letters are included in the phrase
    .toLowerCase() // case insensitive
    .trim() // no spaces
    .includes(letter)) // returns true or false