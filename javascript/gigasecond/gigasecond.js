// const gigasecond = (moment) => {
//     const gigaMiliSecond = Math.pow(10, 9) * Math.pow(10, 3) // all in miliseconds
//     return new Date(moment.getTime() + gigaMiliSecond) // returns a date
// }

export const gigasecond = moment => new Date(moment.getTime() + Math.pow(10, 12))