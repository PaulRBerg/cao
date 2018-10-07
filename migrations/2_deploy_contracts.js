var CAOToken = artifacts.require("./CAOToken.sol");

const tokens = [
	{
		address: "0x43dbd4f0d5e106ca38540bc94e8041a0d23e9cc3",
		name: "Banana",
		symbol: "🍌",
		supply: 1,
	},
	{
		address: "0x301354d1e382f33b04f4b52ce7d5100a2b7e2d79",
		name: "Watter Supply",
		symbol: "💧",
		supply: 1,
	},
	{
		address: "0x536461f393317ebc24e9194c8705b9f28a398b07",
		name: "Canned Food",
		symbol: "🥫",
		supply: 1,
	},
	{
		address: "0x351d6e8b1e647fb635cbef0c155fdd4df21a0007",
		name: "Socks",
		symbol: "🧦",
		supply: 1,
	},
	{
		address: "0x61040750d542ca72216e91c6379571b758902ef2",
		name: "Jacket",
		symbol: "🧥",
		supply: 1,
	},
	{
		address: "0x33105ba4e63a63cc66cca32d3ba86f71ae551e38",
		name: "Sleeping Bag",
		symbol: "🛌",
		supply: 1,
	},
	{
		address: "0x2238aace0160ea4c3ad551a7ee12b583683320f0",
		name: "Knife",
		symbol: "🗡️",
		supply: 1,
	},
	{
		address: "0x964a90bc3b5c3159abff7bbbb074fed2563d3739",
		name: "Fire",
		symbol: "🔥",
		supply: 1,
	},
	{
		address: "0x0bbdac61eb9f43d67df284b78ac3e165d0f62912",
		name: "Scissors",
		symbol: "✂️",
		supply: 1,
	},
	{
		address: "0xefb93b5f81c199ec542858200787da24f9772d67",
		name: "Lantern",
		symbol: "🏮",
		supply: 1,
	},
	{
		address: "0x581bc84f70b7684ff32927970243e2d1ffeb3aec",
		name: "Bread",
		symbol: "🥖",
		supply: 1,
	},
	{
		address: "0xc8801f71ca648b67cb5b38b5e2c4b33127cddf41",
		name: "Tent",
		symbol: "⛺️",
		supply: 1,
	},
	{
		address: "0x325c068e8bdf03f6a696069949b9800f430a2f17",
		name: "Gloves",
		symbol: "🧤",
		supply: 1,
	},
	{
		address: "0x7f054ee9ad74767326468049d70d135266d93ba8",
		name: "Cap",
		symbol: "🧢",
		supply: 1,
	},
	{
		address: "0x1fe87cc75caea5503c932d01994a36245f467433",
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
		address: "0x05e2f2fa10f408ecea847af7c2ee4696988a7559",
		name: "Pill",
		symbol: "💊",
		supply: 1
	},
	{
		address: "0xff08511c8f10789b266effaf26bf0c33eba06b2b",
		name: "Shoes",
		symbol: "👟",
		supply: 1
	},
	{
		address: "0x7d7c0c5ce6cf1e1a7fc150fcb9bad66ac87ef357",
		name: "Scarf",
		symbol: "🧣",
		supply: 1
	},
	{
		address: "0x59d6589c829712cf1b5dafcaa63c739f407c786d",
		name: "T-Shirt",
		symbol: "👕",
		supply: 1
	},
	{
		address: "0x3b96c600c63d1c4c8596eeb190729d1ebfe6b1f9",
		name: "Compass",
		symbol: "🧭",
		supply: 1
	},
	{
		address: "0xedc414ff0b200ae645387c1ef1654b8a2151ec5c",
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
