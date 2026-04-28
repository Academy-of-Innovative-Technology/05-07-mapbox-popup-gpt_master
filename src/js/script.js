mapboxgl.accessToken = //'pk.eyJ1IjoianNvbG9yemFubzI2IiwiYSI6ImNtbzFyZzJlbTBtYTEyb3B1dzJ0aWI4cHMifQ.hDQrk0kII7YUCE3jE0NOLQ'; //


var mapProps = {
   container: 'map',
   center: [-73.97, 40.75],
   zoom: 9
};


var map = new mapboxgl.Map(mapProps);



new mapboxgl.Popup({
 closeOnClick: true,
 offset: 10,
 maxWidth: "250px"
})
.setLngLat([-73.97, 40.75])
.setHTML(`
 <h3>New York City</h3>
 <img src="https://cdn.sanity.io/images/nxpteyfv/goguides/3891a75f142b6e94613f464c4f68a607559122df-1600x1066.jpg" width="100%">
 <p>A busy city known for Times Square and skyscrapers.</p>
`)
.addTo(map);



new mapboxgl.Popup({
 closeOnClick: true,
 offset: 10,
 maxWidth: "250px"
})
.setLngLat([2.35, 48.85])
.setHTML(`
 <h3>Paris</h3>
 <img src="https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/paris-le-havre-leh/lh17-paris-sightseeing-without-lunch/stock-photo-skyline-of-paris-with-eiffel-tower-at-sunset-in-paris-france-eiffel-tower-is-one-of-the-most-752725282.jpg?w=1024" width="100%">
 <p>Famous for the Eiffel Tower and amazing food.</p>
`)
.addTo(map);


new mapboxgl.Popup({
 closeOnClick: true,
 offset: 10,
 maxWidth: "250px"
})
.setLngLat([139.69, 35.68])
.setHTML(`
 <h3>Tokyo</h3>
 <img src="https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2025/02/map-of-tokyo-japan-travel-scaled.jpg?fit=2560%2C1707&ssl=1" width="100%">
 <p>A modern city with technology and culture.</p>
`)
.addTo(map);




// LOCATION 4 - Ecuador (Guayaquil)
new mapboxgl.Popup({
 closeOnClick: true,
 offset: 10,
 maxWidth: "250px"
})
.setLngLat([-79.9, -2.17])
.setHTML(`
 <h3>Guayaquil</h3>
 <img src="https://storage.googleapis.com/travel-web-app-1.appspot.com/flamelink/media/Guayaquil%20%282%29.jpg?GoogleAccessId=firebase-adminsdk-g2s60%40travel-web-app-1.iam.gserviceaccount.com&Expires=16725243600&Signature=M28Qm4rHFygX43InH9l9zV8K8f8tXLxIg%2BW5VP0yjUDQJcWLPymdaDtApXWCAhZIHyJeDAbrJN1HOZsIl%2FkgjPGzn7j%2F16tyu37fDaRQnXxMzQpv21H20yGH80gpCH6FgbsbL%2Bt5raBq8bo9LOBFPQ4WfFJzryVl2X%2FU0wVHJBiCo63EdL96cDver5sHE5vGp2pwuU0llody%2Fzyw%2FO4rsV1UankPb87ahvuUjxrWqEYSK1N8yKDPCHPWlgtJ5YcUYl89n1MvDLQIdkJ%2BSN9ZCfio7UTbp%2B1q0GW6viFs5cMzSL%2BRgJ7ZnO8a2oiN5HCCJZpHqGB5n%2Bgz5evs6PgB1g%3D%3D" width="100%">
 <p>A beautiful coastal city in Ecuador.</p>
`)
.addTo(map);



new mapboxgl.Popup({
 closeOnClick: true,
 offset: 10,
 maxWidth: "250px"
})
.setLngLat([31.13, 29.97])
.setHTML(`
 <h3>Pyramids of Giza</h3>
 <img src="https://gotripzi.com/_astro/cairo-eg-hero.CyzKllD2.webp" width="100%">
 <p>Ancient pyramids and one of the wonders of the world.</p>
`)
.addTo(map);
