const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

const weatherReport = location => {
	geocode(location, (err, data) => {
		if (err) {
			return console.log(err);
		}
		forecast(data.latitude, data.longitude, (err, forecastData) => {
			if (err) {
				return console.log(err);
			}
			console.log(data.location);
			console.log(forecastData);
		});
	});
};

if (location) {
	weatherReport(process.argv[2]);
} else {
	console.log("Please provide a location to get weather report.");
}
