const transcript = {
	G: "C",
	C: "G",
	T: "A",
	A: "U",
};

export function toRna(nucleoid: string) {
	const stringArray = nucleoid.split("");
	return stringArray
		.map((char) => {
			const chave = char as keyof typeof transcript;
			if (
				chave !== "A" &&
				chave !== "T" &&
				chave !== "G" &&
				chave !== "C"
			) {
				throw "Invalid input DNA.";
			}
			return transcript[chave];
		})
		.join("");
}
