export function format(name: string, number: number): string {
	let ending = "th";
	let numberStr = String(number);
	const modOne = number % 10 === 1;
	const modTwo = number % 10 === 2;
	const modThree = number % 10 === 3;
	if (
		(modOne || modTwo || modThree) &&
		numberStr[numberStr.length - 2] !== "1"
	) {
		if (modOne) ending = "st";
		else if (modTwo) ending = "nd";
		else ending = "rd";
	}
	return `${name}, you are the ${number}${ending} customer we serve today. Thank you!`;
}
