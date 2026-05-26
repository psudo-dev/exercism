// I don't understand why can't Exercism say in the text that the function will take two arguments
// the first being the name of the planet and the second the age and it expects a number with 2 decimals as a return.

export const age = (planet, age) => {
  const orbit = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }
  const finalAge = age / 31557600 / orbit[planet]
  return Math.round((finalAge + Number.EPSILON) * 100) / 100
};