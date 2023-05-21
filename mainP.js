let latitude=19.231248, longitude=72.824559

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);

// ----------------------- Mumbai -------------------------------------
var img1 = document.querySelector("#mumbai")

var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);


// ----------------------- Delhi -------------------------------------
var img2 = document.querySelector("#delhi")

var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);


// ----------------------- Kolkata -------------------------------------
var img3 = document.querySelector("#kolkata")

var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);
