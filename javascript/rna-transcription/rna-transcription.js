//   const toRna = (dna) => { // takes DNA string
//   const rna = []
//   const dnaArray = dna.toUpperCase().split("") // turns into an array, each letter is an element
//   dnaArray.forEach((letter) => { // iterate to check for each letter
//     if (letter === "G") {
//       rna.push("C")
//     } else if (letter === "C") {
//       rna.push("G")
//     } else if (letter === "T") {
//       rna.push("A")
//     } else if (letter === "A") {
//       rna.push("U")
//     } else {
//       throw new Error("This is not a DNA nucleoide")
//     }
//   })
//   return rna.join("") // turns the RNA array into a string and returns it
// };

export const toRna = (dna) => {
  const dnaPair = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  }
  return dna.toUpperCase()
    .split("")
    .map(letter => (dnaPair[letter])) // remapped array
    .join("")
};