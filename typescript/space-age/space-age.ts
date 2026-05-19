type Planets =
	| "mercury"
	| "venus"
	| "earth"
	| "mars"
	| "jupiter"
	| "saturn"
	| "uranus"
	| "neptune";

type EarthYears = {
	[Key in Planets]: number;
};

const earthYears: EarthYears = {
	mercury: 0.2408467,
	venus: 0.61519726,
	earth: 1.0,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132,
};

export function age(planet: Planets, seconds: number): number {
	return +(seconds / (earthYears[planet] * 31_557_600)).toFixed(2);
}
