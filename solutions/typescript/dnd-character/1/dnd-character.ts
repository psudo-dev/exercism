export class DnDCharacter {
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
	hitpoints: number;
	constructor() {
		this.strength = DnDCharacter.generateAbilityScore();
		this.dexterity = DnDCharacter.generateAbilityScore();
		this.constitution = DnDCharacter.generateAbilityScore();
		this.intelligence = DnDCharacter.generateAbilityScore();
		this.wisdom = DnDCharacter.generateAbilityScore();
		this.charisma = DnDCharacter.generateAbilityScore();
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
	}
	public static rollDice(): number {
		return Math.floor(Math.random() * 6) + 1;
	}
	public static generateAbilityScore(): number {
		const dicesArray = [
			DnDCharacter.rollDice(),
			DnDCharacter.rollDice(),
			DnDCharacter.rollDice(),
			DnDCharacter.rollDice(),
		];
		dicesArray.sort((a, b) => b - a).pop();
		const sum = [...dicesArray].reduce((acc, num) => {
			return acc + num;
		}, 0);
		return sum;
	}
	public static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2);
	}
}
