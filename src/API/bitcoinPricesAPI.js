import axios from "axios";

const endpoint = "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles";

export const bitcoinPriceByMinute = async (limit) => {
	let apiEndpoint = `${endpoint}/histominute?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd`;
	if (limit) apiEndpoint += `&limit=${limit}`;
	const data = await axios.get(apiEndpoint);
	return data;
};

export const bitcoinPriceByHour = async (limit) => {
	let apiEndpoint = `${endpoint}/histohour?aggregate=1&e=CCCAGG&fsym=BTC&tsym=usd`;
	if (limit) apiEndpoint += `&limit=${limit}`;
	const data = await axios.get(apiEndpoint);
	return data;
};

export const bitcoinPriceByWeek = async (limit) => {
	let apiEndpoint = `${endpoint}/histoday?aggregate=7&e=CCCAGG&fsym=BTC&tsym=usd`;
	if (limit) apiEndpoint += `&limit=${limit}`;
	const data = await axios.get(apiEndpoint);
	return data;
};
