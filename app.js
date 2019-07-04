const geocode = require("./utils/geocode");

geocode("New Delhi", (err, response) => {
	console.log("Error: ", err);
	console.log("Response: ", response);
});
