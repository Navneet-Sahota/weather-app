const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

forecast(37.8267, -122.4233, (err, response) => {
	console.log("Error: ", err);
	console.log("Response: ", response);
});

geocode("New Delhi", (err, response) => {
	console.log("Error: ", err);
	console.log("Response: ", response);
});
