export const isLeap = (year: number) =>
	year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;
