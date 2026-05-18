type Color =
	| "black"
	| "brown"
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "blue"
	| "violet"
	| "grey"
	| "white";

export const COLORS = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];

export function decodedValue(colorDuo: Color[]): number {
	const [color1, color2, ...colors] = colorDuo;
	const num1 = COLORS.indexOf(color1.toLowerCase());
	const num2 = COLORS.indexOf(color2.toLowerCase());
	return num1 * 10 + num2;
}
