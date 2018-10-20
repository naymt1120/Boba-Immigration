// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [36.7783, -119.41792],
  zoom: 6
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


// Create a red circle over San Francisco - Test.test
  L.circle([37.7749, -122.4194], {
    color: "blue",
    fillColor: "blue",
    fillOpacity: 0.75,
    radius: 10000
  }).addTo(myMap);


  //Creating Population Bubbles in Major Density Spots
    //Taiwan - coral

    var Tai1 = L.circle([34.0552, -118.2437], {radius: 70000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('Los Angeles. This is where Nay rests.'),
    Tai2    = L.circle([32.7157, -117.1619], {radius: 40000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('This is San Diego.'),
    Tai3    = L.circle([33.9806, -117.3755], {radius: 4000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('This is Riverside.'),
    Tai4    = L.circle([38.5816, -121.4944], {radius: 10000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('This is Sacramento'),
    Tai5    = L.circle([37.7749, -122.4194], {radius: 60000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('This is SF'),
    Tai6    = L.circle([37.3382, -121.88634], {radius: 7000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('This is San Jose');

    var taiwanCities = L.layerGroup([Tai1,Tai2,Tai3,Tai4,Tai5, Tai6]);

//China - red
    var Chi1 = L.circle([34.0552, -118.2437], {radius: 70000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('Immigrants from China, excluding Hong Kong and Taiwan Population:         207,000'),
    Chi2    = L.circle([32.7157, -117.1619], {radius: 40000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('This is San Diego.'),
    Chi3    = L.circle([33.9806, -117.3755], {radius: 4000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('This is Riverside.'),
    Chi4    = L.circle([38.5816, -121.4944], {radius: 10000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('This is Sacramento'),
    Chi5    = L.circle([37.7749, -122.4194], {radius: 60000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('This is SF'),
    Chi6    = L.circle([37.3382, -121.88634], {radius: 7000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('This is San Jose');

    var chinaCities = L.layerGroup([Chi1,Chi2,Chi3,Chi4,Chi5,Chi6]);

//Korea - green
  var Kor1 = L.circle([34.0552, -118.2437], {radius: 70000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('Los Angeles. This is where Nay rests.'),
  Kor2    = L.circle([32.7157, -117.1619], {radius: 40000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('This is San Diego.'),
  Kor3    = L.circle([33.9806, -117.3755], {radius: 4000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('This is Riverside.'),
  Kor5    = L.circle([37.7749, -122.4194], {radius: 60000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('This is SF'),
  Kor4    = L.circle([38.5816, -121.4944], {radius: 10000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('This is Sacramento'),
  Kor6    = L.circle([37.3382, -121.88634], {radius: 7000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('This is San Jose');

  var koreaCities = L.layerGroup([Kor1,Kor2,Kor3,Kor4,Kor5,Kor6]);

  //Denver Bubble for - Korea, China, taiwan
  var Den1 = L.circle([34.0552, -118.2437], {radius: 70000, color: "pink", fillColor:"pink", fillOpacity:0.75}).bindPopup('Denver, CO.');

  var DenCities = L.layerGroup([Den1]);

    var overlayMaps = {
    "China": chinaCities,
    "Taiwan": taiwanCities,
    "Korea": koreaCities,
    "Denver Bubbles": DenCities};

    L.control.layers(null, overlayMaps).addTo(myMap);

//boba Icon
    var bobaIcon = L.icon({
    iconUrl: 'Boba.png',
    //shadowUrl: 'Boba.png',

    iconSize:     [50, 50], // size of the icon 38,95
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

places = [
    [
        37.56295,
        -122.01004
    ],
    [
        37.48906669,
        -121.9294138
    ],
    [
        37.55131513,
        -121.9938498
    ]
]

places.forEach(function (location) {
         console.log(location)
        L.marker(location, {icon: bobaIcon}).addTo(myMap);
})
//
// L.marker([37.56295,	-122.01004], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.48906669,	-121.9294138], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.55131513,	-121.9938498], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.5536945,	-121.981043], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.576149,	-122.0437049], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.52296041,	-122.0057856], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.48856826,	-121.9291913], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.48844291,	-121.9303837], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.4922976,	-121.9279187], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.50077829,	-121.973168], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.5754481,	-122.0425869], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.49354144,	-121.9298894], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.51959738,	-121.9894932], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.50499244,	-121.9712317], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.55069358,	-122.0514675], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.53195,	-121.95789], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.53123141,	-121.9370478], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.55150492,	-122.0502722], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.5208,	-121.996426], {icon: bobaIcon}).addTo(myMap);
// L.marker([37.57509,	-122.0386], {icon: bobaIcon}).addTo(myMap);



//char icon
  var chartIcon = L.icon({
  iconUrl: 'charticon.png',
  //shadowUrl: 'Boba.png',

  iconSize:     [60, 60], // size of the icon 38,95
  //shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


    // create popup contents
    var customPopup = "East Asian Population in California<br/><img src='PieChart_population.png' width='350px'/>";;

    // specify popup options
    var customOptions =
        {
        'maxWidth': '500',
        'className' : 'custom'
        }

    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    L.marker([35.562965, -126.042835], {icon: chartIcon}).bindPopup(customPopup,customOptions).addTo(myMap);
