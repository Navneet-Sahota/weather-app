const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

const weatherReport = address => {
	geocode(address, (err, { latitude, longitude, location }) => {
		if (err) {
			return console.log(err);
		}
		forecast(latitude, longitude, (err, forecastData) => {
			if (err) {
				return console.log(err);
			}
			console.log(location);
			console.log(forecastData);
		});
	});
};

if (address) {
	weatherReport(process.argv[2]);
} else {
	console.log("Please provide a location to get weather report.");
}
