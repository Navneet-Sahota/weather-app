const request = require("request");

const geocode = (location, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		location
	)}.json?access_token=pk.eyJ1IjoibmF2aXNpbmdoIiwiYSI6ImNqeG55emdoYjAwdWYzZ3BmZHV4NW9kcTgifQ.JlaGUwYYj6uFKmuAv8O7dA`;

	request({ url, json: true }, (err, response, body) => {
		if (err) {
			callback("Unable to connect to location service", null);
		} else if (!body.features) {
			callback("Unable to find location. Try another search.", null);
		} else {
			const { place_name, center } = body.features[0];
			callback(null, {
				latitude: center[1],
				longitude: center[0],
				location: place_name,
			});
		}
	});
};

module.exports = geocode;
