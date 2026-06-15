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

const COLORS = [
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

type Magnitude = "giga" | "mega" | "kilo" | "";

export function decodedResistorValue(colors: Color[]) {
	const [code1, code2, zeros, ...arg] = colors;
	const block = COLORS.indexOf(code1) * 10 + COLORS.indexOf(code2);
	const total = block * Math.pow(10, COLORS.indexOf(zeros));
	let number: number;
	let magnitude: Magnitude;
	const giga = 1_000_000_000;
	const mega = 1_000_000;
	const kilo = 1_000;
	const isGiga = total / giga > 0 && Number.isInteger(total / giga);
	const isMega = total / mega > 0 && Number.isInteger(total / mega);
	const isKilo = total / kilo > 0 && Number.isInteger(total / kilo);
	if (isGiga) {
		number = total / giga;
		magnitude = "giga";
	} else if (isMega) {
		number = total / mega;
		magnitude = "mega";
	} else if (isKilo) {
		number = total / kilo;
		magnitude = "kilo";
	} else {
		number = total;
		magnitude = "";
	}
	return `${number} ${magnitude}ohms`;
}
