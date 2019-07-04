const chalk = require("chalk");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

const weatherReport = address => {
	geocode(address, (err, { latitude, longitude, location }) => {
		if (err) {
			return console.log(chalk.red(err));
		}
		forecast(latitude, longitude, (err, forecastData) => {
			if (err) {
				return console.log(chalk.red(err));
			}
			console.log(chalk.bold.green(location));
			console.log(chalk.italic(forecastData));
		});
	});
};

if (address) {
	weatherReport(process.argv[2]);
} else {
	console.log(
		chalk.bold.red("Please provide a location to get weather report.")
	);
}
