/* 
version with Object

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

const colorCode = (color) => colorList[color.toLowerCase()]
const COLORS = Object.keys(colorList)
*/

// version with Array
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
const colorCode = (color) => COLORS.indexOf(color.toLowerCase())

export {
  COLORS,
  colorCode
}
