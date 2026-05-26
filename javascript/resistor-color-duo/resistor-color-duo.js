// const colorband = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

// const decodedValue = (color) => {
//   const colorIndex1 = colorband.indexOf(color[0])
//   const colorIndex2 = colorband.indexOf(color[1])
//   const colorIndex = `${colorIndex1}${colorIndex2}`
//   return Number(colorIndex)
// };

const colorList = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

const decodedValue = (color) => Number(`${colorList[color[0]]}${colorList[color[1]]}`)

export {
  decodedValue
}