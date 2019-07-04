const request = require("request");

const forecast = (lat, long, callback) => {
	const url = `https://api.darksky.net/forecast/c2d58445b9a9fe39730b4c734962e6db/${encodeURIComponent(
		lat
	)},${encodeURIComponent(long)}?units=si`;

	request({ url, json: true }, (err, { body }) => {
		if (err) {
			callback("Unable to connect to weather service", null);
		} else if (body.error) {
			callback("Unable to detect location", null);
		} else {
			const { temperature, precipProbability } = body.currently;
			const { summary } = body.daily;
			callback(
				null,
				`${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`
			);
		}
	});
};

module.exports = forecast;
