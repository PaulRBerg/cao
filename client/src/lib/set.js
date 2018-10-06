const SetProtocol = require("setprotocol.js");

const getUserBalance = async function(userAddress) {
	return await SetProtocol.erc20.balanceOf(userAddress);
};