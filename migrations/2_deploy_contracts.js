var CAOToken = artifacts.require("./CAOToken.sol");

const tokens = [
	{
		name: "Banana",
		symbol: "🍌",
		supply: 1,
	},
	{
		name: "Watter Supply",
		symbol: "💧",
		supply: 1,
	},
	{
		name: "Canned Food",
		symbol: "🥫",
		supply: 1,
	},
	{
		name: "Socks",
		symbol: "🧦",
		supply: 1,
	},
	{
		name: "Jacket",
		symbol: "🧥",
		supply: 1,
	},
	{
		name: "Sleeping Bag",
		symbol: "🛌",
		supply: 1,
	},
	{
		name: "Knife",
		symbol: "🗡️",
		supply: 1,
	},
	{
		name: "Fire",
		symbol: "🔥",
		supply: 1,
	},
	{
		name: "Scissors",
		symbol: "✂️",
		supply: 1,
	},
	{
		name: "Lantern",
		symbol: "🏮",
		supply: 1,
	},
	{
		name: "Bread",
		symbol: "🥖",
		supply: 1,
	},
	{
		name: "Tent",
		symbol: "⛺️",
		supply: 1,
	},
	{
		name: "Gloves",
		symbol: "🧤",
		supply: 1,
	},
	{
		name: "Cap",
		symbol: "🧢",
		supply: 1,
	},
	{
		name: "Rope",
		symbol: "🥨",
		supply: 1
	},
	{
		address: "0x32c96d2d9ab285388d99c1a35533546d60955737",
		name: "Meat",
		symbol: "🍗",
		supply: 1
	},
	{
		name: "Pill",
		symbol: "💊",
		supply: 1
	},
	{
		name: "Shoes",
		symbol: "👟",
		supply: 1
	},
	{
		name: "Scarf",
		symbol: "🧣",
		supply: 1
	},
	{
		name: "T-Shirt",
		symbol: "👕",
		supply: 1
	},
	{
		name: "Compass",
		symbol: "🧭",
		supply: 1
	},
	{
		name: "Backpack",
		symbol: "🎒",
		supply: 1
	}
];

module.exports = function(deployer) {
	// deployer.deploy(CAOToken, tokens[0].name, tokens[0].symbol, tokens[0].supply);
	tokens.forEach(token => {
		deployer.deploy(CAOToken, token.name, token.symbol, token.supply);
	});
};
