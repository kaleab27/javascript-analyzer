
const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

const value = (colors) => {

	var result = String(COLORS.indexOf(colors[0])) + String(COLORS.indexOf(colors[1]));

	return parseInt(result, 10);

};

export {value};