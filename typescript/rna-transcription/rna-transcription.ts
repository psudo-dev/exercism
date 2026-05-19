const transcript = {
	G: "C",
	C: "G",
	T: "A",
	A: "U",
};

export function toRna(nucleoid: string) {
	return nucleoid
		.split("")
		.map((char) => {
			const key = char as keyof typeof transcript;
			if (key !== "A" && key !== "T" && key !== "G" && key !== "C") {
				throw "Invalid input DNA.";
			}
			return transcript[key];
		})
		.join("");
}
