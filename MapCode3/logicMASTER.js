

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




  //Creating Population Bubbles in Major Density Spots
    //Taiwan - coral

    var Tai1 = L.circle([34.0552, -118.2437], {radius: 60000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('Los Angeles: Immigrants from Taiwan - population: 89,000'),
    Tai2    = L.circle([32.7157, -117.1619], {radius: 4000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('San Diego: Immigrants from Taiwan - population: 7,000'),
    Tai3    = L.circle([33.9806, -117.3755], {radius: 5000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('Riverside: Immigrants from Taiwan - population: 11,000'),
    Tai4    = L.circle([38.5816, -121.4944], {radius: 6000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('Sacramento: Immigrants from Taiwan - population: 4,000'),
    Tai5    = L.circle([37.7749, -122.4194], {radius: 20000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('San Francisco: Immigrants from Taiwan - population: 28,000'),
    Tai6    = L.circle([37.3382, -121.88634], {radius: 20000, color: "coral", fillColor:"coral", fillOpacity:0.75}).bindPopup('San Jose: Immigrants from Taiwan - population: 28,000');

    var taiwanCities = L.layerGroup([Tai1,Tai2,Tai3,Tai4,Tai5, Tai6]);

//China - red
    var Chi1 = L.circle([34.0552, -118.2437], {radius: 90000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('Los Angeles: Immigrants from China - population:  207,000'),
    Chi2    = L.circle([32.7157, -117.1619], {radius: 40000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('San Diego: Immigrants from China - population:'),
    Chi3    = L.circle([33.9806, -117.3755], {radius: 4000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('Riverside: Immigrants from China - population:'),
    Chi4    = L.circle([38.5816, -121.4944], {radius: 10000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('Sacramento: Immigrants from China - population:'),
    Chi5    = L.circle([37.7749, -122.4194], {radius: 60000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('San Francisco: Immigrants from China - population:'),
    Chi6    = L.circle([37.3382, -121.88634], {radius: 7000, color: "red", fillColor:"red", fillOpacity:0.75}).bindPopup('San Jose: Immigrants from China - population:');

    var chinaCities = L.layerGroup([Chi1,Chi2,Chi3,Chi4,Chi5,Chi6]);

//Korea - green
  var Kor1 = L.circle([34.0552, -118.2437], {radius: 100000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('Los Angeles:  Immigrants from Korea - population: 221,000'),
  Kor2    = L.circle([32.7157, -117.1619], {radius: 3000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('San Diego: Immigrants from Korea - population: 15,000'),
  Kor3    = L.circle([33.9806, -117.3755], {radius: 4000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('Riverside: Immigrants from Korea - population: 18,000'),
  Kor5    = L.circle([37.7749, -122.4194], {radius: 60000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('San Francisco: Immigrants from Korea - population: 29,000'),
  Kor4    = L.circle([38.5816, -121.4944], {radius: 7000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('Sacramento: Immigrants from Korea - population: 8,000'),
  Kor6    = L.circle([37.3382, -121.88634], {radius: 40000, color: "green", fillColor:"green", fillOpacity:0.75}).bindPopup('San Jose: Immigrants from Korea - population: 21,000');

  var koreaCities = L.layerGroup([Kor1,Kor2,Kor3,Kor4,Kor5,Kor6]);

  //Denver Bubble for - Korea, China, taiwan
  var Den1 = L.circle([39.7392, -104.9903], {radius: 2900, color: "coral", fillColor:"coral", fillOpacity:0.50}).bindPopup('Immigrants from Taiwan - Population: 2,000');
  var Den3 = L.circle([39.8555, -104.8900], {radius: 7000, color: "red", fillColor:"red", fillOpacity:0.50}).bindPopup('Immigrants from China - Population: 10,000');
  var Den2 = L.circle([39.8392, -104.8903], {radius: 7000, color: "green", fillColor:"green", fillOpacity:0.50}).bindPopup('Immigrants from Korea - Population: 10,000');
  var Den4 = L.circle([40.0150, -105.2705], {radius: 2900, color: "red", fillColor:"red", fillOpacity:0.50}).bindPopup('Immigrants from China - Population: 3,000');
  var Den5 = L.circle([38.8339, -104.8214], {radius: 2900, color: "green", fillColor:"green", fillOpacity:0.50}).bindPopup('Immigrants from Korea - Population: 4,000');



  var DenCities = L.layerGroup([Den1,Den2,Den3,Den4,Den5]);

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
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -7] // point from which the popup should open relative to the iconAnchor
});

places = [
    {
      "zip_code": 80201,
      "latitude": 39.726303,
      "longitude": -104.856808,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80202,
      "latitude": 39.760189,
      "longitude": -104.996553,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80203,
      "latitude": 39.729205,
      "longitude": -104.970331,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80204,
      "latitude": 39.720136,
      "longitude": -105.021502,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80205,
      "latitude": 39.760137,
      "longitude": -104.967585,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80206,
      "latitude": 39.730787,
      "longitude": -104.953335,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80207,
      "latitude": 39.713186,
      "longitude": -104.903532,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80208,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80209,
      "latitude": 39.707332,
      "longitude": -104.964236,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80210,
      "latitude": 39.701677,
      "longitude": -104.964186,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80211,
      "latitude": 39.765291,
      "longitude": -105.018387,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80212,
      "latitude": 39.768286,
      "longitude": -105.049338,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80216,
      "latitude": 39.777036,
      "longitude": -104.942034,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80217,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80218,
      "latitude": 39.720236,
      "longitude": -104.968759,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80219,
      "latitude": 39.695014,
      "longitude": -105.034339,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80220,
      "latitude": 39.732436,
      "longitude": -104.910843,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80222,
      "latitude": 39.709343,
      "longitude": -104.924134,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80223,
      "latitude": 39.707186,
      "longitude": -105.008762,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80224,
      "latitude": 39.702037,
      "longitude": -104.911434,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80227,
      "latitude": 39.667479,
      "longitude": -105.067136,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80230,
      "latitude": 39.721848,
      "longitude": -104.895093,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80231,
      "latitude": 39.68493,
      "longitude": -104.886785,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80235,
      "latitude": 39.645837,
      "longitude": -105.065003,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80236,
      "latitude": 39.649837,
      "longitude": -105.034988,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80237,
      "latitude": 39.638537,
      "longitude": -104.903984,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80238,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80239,
      "latitude": 39.804398,
      "longitude": -104.813919,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80243,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80244,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80246,
      "latitude": 39.708637,
      "longitude": -104.931234,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80248,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80249,
      "latitude": 39.83776,
      "longitude": -104.697674,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80250,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80251,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80252,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80254,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80255,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80256,
      "latitude": 39.74739,
      "longitude": -104.992842,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80257,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80259,
      "latitude": 39.746239,
      "longitude": -104.991334,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80261,
      "latitude": 39.737929,
      "longitude": -104.985036,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80262,
      "latitude": 39.731038,
      "longitude": -104.938391,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80263,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80264,
      "latitude": 39.74259,
      "longitude": -104.986292,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80265,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80266,
      "latitude": 39.747179,
      "longitude": -104.991511,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80270,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80271,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80273,
      "latitude": 39.727293,
      "longitude": -104.987535,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80274,
      "latitude": 39.743934,
      "longitude": -104.987577,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80275,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80279,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80280,
      "latitude": 39.716675,
      "longitude": -104.906942,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80281,
      "latitude": 39.74394,
      "longitude": -104.987577,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80285,
      "latitude": "",
      "longitude": "",
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80290,
      "latitude": 39.743608,
      "longitude": -104.987556,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80291,
      "latitude": 39.74394,
      "longitude": -104.987577,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80292,
      "latitude": 39.74739,
      "longitude": -104.992842,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80293,
      "latitude": 39.745786,
      "longitude": -104.990686,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80294,
      "latitude": 39.749086,
      "longitude": -104.989036,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80295,
      "latitude": 39.745486,
      "longitude": -104.986336,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },
    {
      "zip_code": 80299,
      "latitude": 39.738752,
      "longitude": -104.408349,
      "city": "Denver",
      "state": "CO",
      "county": "Denver"
    },

    {
      "zip_code": 91901,
      "latitude": 32.74081,
      "longitude": -116.976341,
      "city": "Alpine",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91902,
      "latitude": 32.67387,
      "longitude": -117.020668,
      "city": "Bonita",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91903,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Alpine",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91905,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Boulevard",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91906,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Campo",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91908,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Bonita",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91909,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91910,
      "latitude": 32.636922,
      "longitude": -117.050072,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91911,
      "latitude": 32.615983,
      "longitude": -117.034012,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91912,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91913,
      "latitude": 32.639967,
      "longitude": -116.984669,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91914,
      "latitude": 32.656159,
      "longitude": -116.966139,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91915,
      "latitude": 32.629234,
      "longitude": -116.948228,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91916,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Descanso",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91917,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Dulzura",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91921,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Chula Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91931,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Guatay",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91932,
      "latitude": 32.578991,
      "longitude": -117.117351,
      "city": "Imperial Beach",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91933,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Imperial Beach",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91934,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Jacumba",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91935,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Jamul",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91941,
      "latitude": 32.76105,
      "longitude": -116.998102,
      "city": "La Mesa",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91942,
      "latitude": 32.781084,
      "longitude": -117.018638,
      "city": "La Mesa",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91943,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "La Mesa",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91944,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "La Mesa",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91945,
      "latitude": 32.732288,
      "longitude": -117.037344,
      "city": "Lemon Grove",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91946,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Lemon Grove",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91947,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Lincoln Acres",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91948,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Mount Laguna",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91950,
      "latitude": 32.671194,
      "longitude": -117.084353,
      "city": "National City",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91951,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "National City",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91962,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Pine Valley",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91963,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Potrero",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91976,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Spring Valley",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91977,
      "latitude": 32.718352,
      "longitude": -117.000109,
      "city": "Spring Valley",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91978,
      "latitude": 32.733452,
      "longitude": -116.957898,
      "city": "Spring Valley",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91979,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Spring Valley",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91980,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Tecate",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91987,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Tecate",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 91990,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Potrero",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92003,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Bonsall",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92004,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Borrego Springs",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92007,
      "latitude": 33.023042,
      "longitude": -117.274469,
      "city": "Cardiff By The Sea",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92008,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Carlsbad",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92009,
      "latitude": 33.082192,
      "longitude": -117.267169,
      "city": "Carlsbad",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92013,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Carlsbad",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92014,
      "latitude": 32.974074,
      "longitude": -117.224167,
      "city": "Del Mar",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92018,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Carlsbad",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92019,
      "latitude": 32.865113,
      "longitude": -117.041287,
      "city": "El Cajon",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92020,
      "latitude": 32.787514,
      "longitude": -116.960836,
      "city": "El Cajon",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92021,
      "latitude": 32.822138,
      "longitude": -116.885508,
      "city": "El Cajon",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92022,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "El Cajon",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92023,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Encinitas",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92024,
      "latitude": 33.054154,
      "longitude": -117.250253,
      "city": "Encinitas",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92025,
      "latitude": 33.057128,
      "longitude": -117.083403,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92026,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92027,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92028,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Fallbrook",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92029,
      "latitude": 33.071941,
      "longitude": -117.158497,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92030,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92033,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92036,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Julian",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92037,
      "latitude": 32.898511,
      "longitude": -117.225744,
      "city": "La Jolla",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92038,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "La Jolla",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92039,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "La Jolla",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92040,
      "latitude": 32.893498,
      "longitude": -116.898945,
      "city": "Lakeside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92046,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Escondido",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92049,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92051,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92052,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92054,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92055,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Camp Pendleton",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92056,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92057,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92058,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Oceanside",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92059,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Pala",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92060,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Palomar Mountain",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92061,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Pauma Valley",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92064,
      "latitude": 32.994097,
      "longitude": -117.030299,
      "city": "Poway",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92065,
      "latitude": 33.031572,
      "longitude": -116.976549,
      "city": "Ramona",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92066,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Ranchita",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92067,
      "latitude": 33.005026,
      "longitude": -117.21569,
      "city": "Rancho Santa Fe",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92068,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Luis Rey",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92069,
      "latitude": 33.099573,
      "longitude": -117.215112,
      "city": "San Marcos",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92070,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Santa Ysabel",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92071,
      "latitude": 32.843956,
      "longitude": -116.994511,
      "city": "Santee",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92072,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Santee",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92074,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Poway",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92075,
      "latitude": 33.007075,
      "longitude": -117.256769,
      "city": "Solana Beach",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92078,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Marcos",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92079,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Marcos",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92082,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Valley Center",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92083,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92084,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92085,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Vista",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92086,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Warner Springs",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92088,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Fallbrook",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92090,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "El Cajon",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92091,
      "latitude": 32.962307,
      "longitude": -117.046183,
      "city": "Rancho Santa Fe",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92092,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "La Jolla",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92093,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "La Jolla",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92096,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Marcos",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92101,
      "latitude": 32.7211,
      "longitude": -117.174366,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92102,
      "latitude": 32.71712,
      "longitude": -117.118604,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92103,
      "latitude": 32.746085,
      "longitude": -117.170517,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92104,
      "latitude": 32.73875,
      "longitude": -117.128908,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92105,
      "latitude": 32.7374,
      "longitude": -117.087313,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92106,
      "latitude": 32.709355,
      "longitude": -117.232764,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92107,
      "latitude": 32.735,
      "longitude": -117.202669,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92108,
      "latitude": 32.774699,
      "longitude": -117.148616,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92109,
      "latitude": 32.794748,
      "longitude": -117.239392,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92110,
      "latitude": 32.775849,
      "longitude": -117.207965,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92111,
      "latitude": 32.803717,
      "longitude": -117.16643,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92112,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92113,
      "latitude": 32.694601,
      "longitude": -117.121678,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92114,
      "latitude": 32.70614,
      "longitude": -117.051651,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92115,
      "latitude": 32.7576,
      "longitude": -117.070688,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92116,
      "latitude": 32.7654,
      "longitude": -117.127894,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92117,
      "latitude": 32.818398,
      "longitude": -117.197168,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92118,
      "latitude": 32.656176,
      "longitude": -117.160815,
      "city": "Coronado",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92119,
      "latitude": 32.815849,
      "longitude": -117.033162,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92120,
      "latitude": 32.794947,
      "longitude": -117.079863,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92121,
      "latitude": 32.90391,
      "longitude": -117.207828,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92122,
      "latitude": 32.856847,
      "longitude": -117.208027,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92123,
      "latitude": 32.810983,
      "longitude": -117.136812,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92124,
      "latitude": 32.818733,
      "longitude": -117.082387,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92126,
      "latitude": 32.899613,
      "longitude": -117.144916,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92127,
      "latitude": 33.021243,
      "longitude": -117.120915,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92128,
      "latitude": 32.995484,
      "longitude": -117.07483,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92129,
      "latitude": 32.965012,
      "longitude": -117.126619,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92130,
      "latitude": 32.952467,
      "longitude": -117.161871,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92131,
      "latitude": 32.874916,
      "longitude": -117.088322,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92132,
      "latitude": 32.643703,
      "longitude": -117.138414,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92133,
      "latitude": 32.733507,
      "longitude": -117.216451,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92134,
      "latitude": 32.562106,
      "longitude": -117.07166,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92135,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92136,
      "latitude": 32.68342,
      "longitude": -117.121913,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92137,
      "latitude": 32.85377,
      "longitude": -117.119744,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92138,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92139,
      "latitude": 32.68018,
      "longitude": -117.047627,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92140,
      "latitude": 32.74344,
      "longitude": -117.200412,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92142,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92143,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Ysidro",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92145,
      "latitude": 32.889139,
      "longitude": -117.100486,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92147,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92149,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92150,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92152,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92153,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92154,
      "latitude": 32.628038,
      "longitude": -117.035225,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92155,
      "latitude": 32.671602,
      "longitude": -117.165665,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92158,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92159,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92160,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92161,
      "latitude": 32.871846,
      "longitude": -117.229119,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92162,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92163,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92164,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92165,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92166,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92167,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92168,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92169,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92170,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92171,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92172,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92173,
      "latitude": 32.566356,
      "longitude": -116.997475,
      "city": "San Ysidro",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92174,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92175,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92176,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92177,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92178,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "Coronado",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92179,
      "latitude": 32.572602,
      "longitude": -116.918724,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92182,
      "latitude": 32.775088,
      "longitude": -117.076176,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92184,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92186,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92187,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92190,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92191,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92192,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92193,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92194,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92195,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92196,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92197,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92198,
      "latitude": 33.016928,
      "longitude": -116.846046,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
    {
      "zip_code": 92199,
      "latitude": 32.751575,
      "longitude": -117.191848,
      "city": "San Diego",
      "state": "CA",
      "county": "San Diego"
    },
  {
    "zip_code": 90001,
    "latitude": 33.973951,
    "longitude": -118.248405,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90002,
    "latitude": 33.950514,
    "longitude": -118.245855,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90003,
    "latitude": 33.949164,
    "longitude": -118.273156,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90004,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90005,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90006,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90007,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90008,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90009,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90010,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90011,
    "latitude": 33.989264,
    "longitude": -118.250056,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90012,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90013,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90014,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90015,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90016,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90017,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90018,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90019,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90020,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90021,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90022,
    "latitude": 33.896564,
    "longitude": -118.176502,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90023,
    "latitude": 34.008262,
    "longitude": -118.196055,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90024,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90025,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90026,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90027,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90028,
    "latitude": 34.014613,
    "longitude": -118.225606,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90029,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90030,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90031,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90032,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90033,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90034,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90035,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90036,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90037,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90038,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90039,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90040,
    "latitude": 33.990863,
    "longitude": -118.153153,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90041,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90042,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90043,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90044,
    "latitude": 33.938108,
    "longitude": -118.285706,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90045,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90046,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90047,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90048,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90049,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90050,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90051,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90052,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90053,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90054,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90055,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90056,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90057,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90058,
    "latitude": 33.999433,
    "longitude": -118.213255,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90059,
    "latitude": 33.921065,
    "longitude": -118.244955,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90060,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90061,
    "latitude": 33.920965,
    "longitude": -118.275356,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90062,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90063,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90064,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90065,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90066,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90067,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90068,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90069,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90070,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90071,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90072,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90073,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90074,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90075,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90076,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90077,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90078,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90079,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90080,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90081,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90082,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90083,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90084,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90086,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90087,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90088,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90089,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90091,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90093,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90094,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90095,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90096,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90097,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90099,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90101,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90102,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90103,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90174,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90185,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Los Angeles",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90201,
    "latitude": 33.976663,
    "longitude": -118.168903,
    "city": "Bell",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90202,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Bell Gardens",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90209,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Beverly Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90210,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Beverly Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90211,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Beverly Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90212,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Beverly Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90213,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Beverly Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90220,
    "latitude": 33.874815,
    "longitude": -118.240208,
    "city": "Compton",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90221,
    "latitude": 33.879565,
    "longitude": -118.21681,
    "city": "Compton",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90222,
    "latitude": 33.909915,
    "longitude": -118.235654,
    "city": "Compton",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90223,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Compton",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90224,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Compton",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90230,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Culver City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90231,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Culver City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90232,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Culver City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90233,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Culver City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90239,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Downey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90240,
    "latitude": 33.946363,
    "longitude": -118.119461,
    "city": "Downey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90241,
    "latitude": 33.939164,
    "longitude": -118.125851,
    "city": "Downey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90242,
    "latitude": 33.922714,
    "longitude": -118.139969,
    "city": "Downey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90245,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "El Segundo",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90247,
    "latitude": 33.888315,
    "longitude": -118.295256,
    "city": "Gardena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90248,
    "latitude": 33.877165,
    "longitude": -118.269605,
    "city": "Gardena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90249,
    "latitude": 33.858866,
    "longitude": -118.299106,
    "city": "Gardena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90250,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Hawthorne",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90251,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Hawthorne",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90254,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Hermosa Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90255,
    "latitude": 33.977987,
    "longitude": -118.213137,
    "city": "Huntington Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90260,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lawndale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90261,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lawndale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90262,
    "latitude": 33.924538,
    "longitude": -118.202954,
    "city": "Lynwood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90263,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Malibu",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90264,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Malibu",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90265,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Malibu",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90266,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Manhattan Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90267,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Manhattan Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90270,
    "latitude": 33.988463,
    "longitude": -118.187376,
    "city": "Maywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90272,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pacific Palisades",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90274,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palos Verdes Peninsula",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90275,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Rancho Palos Verdes",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90277,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Redondo Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90278,
    "latitude": 33.987613,
    "longitude": -118.179754,
    "city": "Redondo Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90280,
    "latitude": 33.937714,
    "longitude": -118.193403,
    "city": "South Gate",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90290,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Topanga",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90291,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Venice",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90292,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Marina Del Rey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90293,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Playa Del Rey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90294,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Venice",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90295,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Marina Del Rey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90296,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Playa Del Rey",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90301,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90302,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90303,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90304,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90305,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90306,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90307,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90308,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90309,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90310,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90311,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90312,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90313,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90397,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90398,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Inglewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90401,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90402,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90403,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90404,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90405,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90406,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90407,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90408,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90409,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90410,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90411,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Monica",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90501,
    "latitude": 33.835665,
    "longitude": -118.303805,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90502,
    "latitude": 33.833816,
    "longitude": -118.293405,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90503,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90504,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90505,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90506,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90507,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90508,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90509,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90510,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Torrance",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90601,
    "latitude": 34.004311,
    "longitude": -118.0441,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90602,
    "latitude": 33.971839,
    "longitude": -118.036578,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90603,
    "latitude": 33.947372,
    "longitude": -117.995297,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90604,
    "latitude": 33.932663,
    "longitude": -118.009085,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90605,
    "latitude": 33.944312,
    "longitude": -118.017424,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90606,
    "latitude": 33.967162,
    "longitude": -118.036999,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90607,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90608,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90609,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90610,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90612,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Whittier",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90637,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Mirada",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90638,
    "latitude": 33.900863,
    "longitude": -118.007297,
    "city": "La Mirada",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90639,
    "latitude": 33.905813,
    "longitude": -118.018247,
    "city": "La Mirada",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90640,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Montebello",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90650,
    "latitude": 33.906763,
    "longitude": -118.076549,
    "city": "Norwalk",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90651,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Norwalk",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90652,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Norwalk",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90659,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Norwalk",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90660,
    "latitude": 33.985812,
    "longitude": -118.088787,
    "city": "Pico Rivera",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90661,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pico Rivera",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90662,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pico Rivera",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90665,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pico Rivera",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90670,
    "latitude": 33.927063,
    "longitude": -118.063698,
    "city": "Santa Fe Springs",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90671,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Fe Springs",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90701,
    "latitude": 33.865395,
    "longitude": -118.073148,
    "city": "Artesia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90702,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Artesia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90703,
    "latitude": 33.866914,
    "longitude": -118.068648,
    "city": "Cerritos",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90704,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Avalon",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90706,
    "latitude": 33.888014,
    "longitude": -118.12965,
    "city": "Bellflower",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90707,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Bellflower",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90710,
    "latitude": 33.791267,
    "longitude": -118.251554,
    "city": "Harbor City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90711,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lakewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90712,
    "latitude": 33.845624,
    "longitude": -118.14645,
    "city": "Lakewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90713,
    "latitude": 33.850465,
    "longitude": -118.109399,
    "city": "Lakewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90714,
    "latitude": 33.851215,
    "longitude": -118.1339,
    "city": "Lakewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90715,
    "latitude": 33.840565,
    "longitude": -118.078748,
    "city": "Lakewood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90716,
    "latitude": 33.830967,
    "longitude": -118.072796,
    "city": "Hawaiian Gardens",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90717,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lomita",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90723,
    "latitude": 33.899015,
    "longitude": -118.165152,
    "city": "Paramount",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90731,
    "latitude": 33.753088,
    "longitude": -118.253053,
    "city": "San Pedro",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90732,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Pedro",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90733,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Pedro",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90734,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Pedro",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90744,
    "latitude": 33.779417,
    "longitude": -118.253853,
    "city": "Wilmington",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90745,
    "latitude": 33.813317,
    "longitude": -118.261154,
    "city": "Carson",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90746,
    "latitude": 33.859716,
    "longitude": -118.255204,
    "city": "Carson",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90747,
    "latitude": 33.867138,
    "longitude": -118.253825,
    "city": "Carson",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90748,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Wilmington",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90749,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Carson",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90801,
    "latitude": 33.804309,
    "longitude": -118.200957,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90802,
    "latitude": 33.756024,
    "longitude": -118.201101,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90803,
    "latitude": 33.759885,
    "longitude": -118.13016,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90804,
    "latitude": 33.785666,
    "longitude": -118.135699,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90805,
    "latitude": 33.838815,
    "longitude": -118.1576,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90806,
    "latitude": 33.795016,
    "longitude": -118.172801,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90807,
    "latitude": 33.831466,
    "longitude": -118.181102,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90808,
    "latitude": 33.800266,
    "longitude": -118.106132,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90809,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90810,
    "latitude": 33.819266,
    "longitude": -118.232453,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90813,
    "latitude": 33.780017,
    "longitude": -118.183701,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90814,
    "latitude": 33.771301,
    "longitude": -118.142654,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90815,
    "latitude": 33.793516,
    "longitude": -118.114612,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90822,
    "latitude": 33.792666,
    "longitude": -118.1638,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90831,
    "latitude": 33.767817,
    "longitude": -118.199401,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90832,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90833,
    "latitude": 33.767817,
    "longitude": -118.199401,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90834,
    "latitude": 33.767817,
    "longitude": -118.199401,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90835,
    "latitude": 33.767817,
    "longitude": -118.199401,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90840,
    "latitude": 33.784266,
    "longitude": -118.115698,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90842,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90844,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90845,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90846,
    "latitude": 33.824918,
    "longitude": -118.150352,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90847,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90848,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90853,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90888,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 90899,
    "latitude": "",
    "longitude": "",
    "city": "Long Beach",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91001,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Altadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91003,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Altadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91006,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Arcadia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91007,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Arcadia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91009,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Duarte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91010,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Duarte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91011,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Canada Flintridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91012,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Canada Flintridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91016,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Monrovia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91017,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Monrovia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91020,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Montrose",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91021,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Montrose",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91023,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Mount Wilson",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91024,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sierra Madre",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91025,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sierra Madre",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91030,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "South Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91031,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "South Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91040,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sunland",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91041,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sunland",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91042,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Tujunga",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91043,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Tujunga",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91046,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Verdugo City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91050,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91051,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91066,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Arcadia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91077,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Arcadia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91101,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91102,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91103,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91104,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91105,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91106,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91107,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91108,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Marino",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91109,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91110,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91114,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91115,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91116,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91117,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91118,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Marino",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91121,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91123,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91124,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91125,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91126,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91129,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91131,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91175,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91182,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91184,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91185,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91186,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91187,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91188,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91189,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91191,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pasadena",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91201,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91202,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91203,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91204,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91205,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91206,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91207,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91208,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91209,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91210,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91214,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Crescenta",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91221,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91222,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91224,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Crescenta",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91225,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91226,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91301,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Agoura Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91302,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Calabasas",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91303,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Canoga Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91304,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Canoga Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91305,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Canoga Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91306,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Winnetka",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91307,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91308,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91309,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Canoga Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91310,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Castaic",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91311,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Chatsworth",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91312,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Chatsworth",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91313,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Chatsworth",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91316,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Encino",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91321,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Newhall",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91322,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Newhall",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91324,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91325,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91326,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91327,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91328,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91329,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91330,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Northridge",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91331,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pacoima",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91333,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pacoima",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91334,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pacoima",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91335,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Reseda",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91337,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Reseda",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91340,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Fernando",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91341,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Fernando",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91342,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sylmar",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91343,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91344,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Granada Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91345,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Mission Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91346,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Mission Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91350,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Clarita",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91351,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Canyon Country",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91352,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sun Valley",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91353,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sun Valley",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91354,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Valencia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91355,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Valencia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91356,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Tarzana",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91357,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Tarzana",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91363,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Westlake Village",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91364,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Woodland Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91365,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Woodland Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91367,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Woodland Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91371,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Woodland Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91372,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Calabasas",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91376,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Agoura Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91380,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Clarita",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91381,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Stevenson Ranch",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91382,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Clarita",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91383,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Santa Clarita",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91384,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Castaic",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91385,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Valencia",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91386,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Canyon Country",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91387,
    "latitude": "",
    "longitude": "",
    "city": "Canyon Country",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91388,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91390,
    "latitude": "",
    "longitude": "",
    "city": "Santa Clarita",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91392,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sylmar",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91393,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91394,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Granada Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91395,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Mission Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91396,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Winnetka",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91399,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Woodland Hills",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91401,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91402,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Panorama City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91403,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sherman Oaks",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91404,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91405,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91406,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91407,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91408,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91409,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91410,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91411,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91412,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Panorama City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91413,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sherman Oaks",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91416,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Encino",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91423,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sherman Oaks",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91426,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Encino",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91436,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Encino",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91470,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91482,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91495,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Sherman Oaks",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91496,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91497,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91499,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Van Nuys",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91501,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91502,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91503,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91504,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91505,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91506,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91507,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91508,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91510,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91521,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91522,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91523,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91526,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Burbank",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91601,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91602,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91603,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91604,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Studio City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91605,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91606,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91607,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Valley Village",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91608,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Universal City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91609,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91610,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Toluca Lake",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91611,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91612,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91614,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Studio City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91615,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91616,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91617,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Valley Village",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91618,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "North Hollywood",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91702,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Azusa",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91706,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Baldwin Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91711,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Claremont",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91714,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "City Of Industry",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91715,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "City Of Industry",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91716,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "City Of Industry",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91722,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91723,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91724,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91731,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "El Monte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91732,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "El Monte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91733,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "South El Monte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91734,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "El Monte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91735,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "El Monte",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91740,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendora",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91741,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Glendora",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91744,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Puente",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91745,
    "latitude": 33.976114,
    "longitude": -117.981631,
    "city": "Hacienda Heights",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91746,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Puente",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91747,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Puente",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91748,
    "latitude": 33.966218,
    "longitude": -117.91736,
    "city": "Rowland Heights",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91749,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Puente",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91750,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "La Verne",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91754,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Monterey Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91755,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Monterey Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91756,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Monterey Park",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91759,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Mt Baldy",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91765,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Diamond Bar",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91766,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pomona",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91767,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pomona",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91768,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pomona",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91769,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pomona",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91770,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Rosemead",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91771,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Rosemead",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91772,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Rosemead",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91773,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Dimas",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91775,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Gabriel",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91776,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Gabriel",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91778,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "San Gabriel",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91780,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Temple City",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91788,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Walnut",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91789,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Walnut",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91790,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91791,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91792,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91793,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "West Covina",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91795,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Walnut",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91797,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pomona",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91799,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pomona",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91801,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91802,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91803,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91804,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91841,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91896,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 91899,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Alhambra",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93510,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Acton",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93532,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lake Hughes",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93534,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lancaster",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93535,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lancaster",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93536,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lancaster",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93539,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lancaster",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93543,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Littlerock",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93544,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Llano",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93550,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palmdale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93551,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palmdale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93552,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palmdale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93553,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Pearblossom",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93563,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Valyermo",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93584,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lancaster",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93586,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Lancaster",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93590,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palmdale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93591,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palmdale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "zip_code": 93599,
    "latitude": 33.786594,
    "longitude": -118.298662,
    "city": "Palmdale",
    "state": "CA",
    "county": "Los Angeles"
  },
  {
    "name": "99% Tea House",
    "rating": 4.5,
    "city": "Fremont",
    "latitude": 37.56295,
    "longitude": -122.01004
  },
  {
    "name": "One Tea",
    "rating": 4.5,
    "city": "Fremont",
    "latitude": 37.48906669,
    "longitude": -121.9294138
  },
  {
    "name": "Royaltea USA",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.55131513,
    "longitude": -121.9938498
  },
  {
    "name": "TECO Tea & Coffee Bar",
    "rating": 4.5,
    "city": "Fremont",
    "latitude": 37.5536945,
    "longitude": -121.981043
  },
  {
    "name": "T-LAB",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.576149,
    "longitude": -122.0437049
  },
  {
    "name": "Q-Tea Monster",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.52296041,
    "longitude": -122.0057856
  },
  {
    "name": "Gong Cha",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.48856826,
    "longitude": -121.9291913
  },
  {
    "name": "Happy Lemon",
    "rating": 4.5,
    "city": "Fremont",
    "latitude": 37.48844291,
    "longitude": -121.9303837
  },
  {
    "name": "Factory Tea Bar",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.4922976,
    "longitude": -121.9279187
  },
  {
    "name": "Super Cue Cafe",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.50077829,
    "longitude": -121.973168
  },
  {
    "name": "Milk and Honey Cafe",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.5754481,
    "longitude": -122.0425869
  },
  {
    "name": "Tea Island",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.49354144,
    "longitude": -121.9298894
  },
  {
    "name": "Taro Taro Dessert & Tea House",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.51959738,
    "longitude": -121.9894932
  },
  {
    "name": "i-Tea",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.50499244,
    "longitude": -121.9712317
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.55069358,
    "longitude": -122.0514675
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.53195,
    "longitude": -121.95789
  },
  {
    "name": "uRbain tea",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.53123141,
    "longitude": -121.9370478
  },
  {
    "name": "MandRo Teahouse",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.55150492,
    "longitude": -122.0502722
  },
  {
    "name": "Gong Cha",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.5208,
    "longitude": -121.996426
  },
  {
    "name": "Tea Six",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.57509,
    "longitude": -122.0386
  },
  {
    "name": "Tata Teahouse",
    "rating": 3,
    "city": "Fremont",
    "latitude": 37.543782,
    "longitude": -121.986825
  },
  {
    "name": "Tea Station",
    "rating": 3.5,
    "city": "Newark",
    "latitude": 37.523356,
    "longitude": -122.006645
  },
  {
    "name": "Sno-Crave Tea House",
    "rating": 3,
    "city": "Fremont",
    "latitude": 37.500044,
    "longitude": -121.973622
  },
  {
    "name": "Boba Queen",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.5757,
    "longitude": -122.03977
  },
  {
    "name": "T4 Tea",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.53181,
    "longitude": -121.91944
  },
  {
    "name": "Boba Fitt Drinks",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.58971912,
    "longitude": -122.0711484
  },
  {
    "name": "Sweet Home Cafe",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.51806664,
    "longitude": -121.9895241
  },
  {
    "name": "Tea Era",
    "rating": 4,
    "city": "Mountain View",
    "latitude": 37.3929561,
    "longitude": -122.0792811
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "Los Altos",
    "latitude": 37.40125417,
    "longitude": -122.1144693
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.4932967,
    "longitude": -121.9312981
  },
  {
    "name": "My Delights",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.5304985,
    "longitude": -121.9206376
  },
  {
    "name": "T4",
    "rating": 3,
    "city": "Fremont",
    "latitude": 37.56311185,
    "longitude": -122.0152915
  },
  {
    "name": "Sno-Crave Teahouse",
    "rating": 4,
    "city": "Union City",
    "latitude": 37.5889987,
    "longitude": -122.0208657
  },
  {
    "name": "Sharetea",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.587234,
    "longitude": -122.022712
  },
  {
    "name": "Tastea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.3878,
    "longitude": -121.86019
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Castro Valley",
    "latitude": 37.695911,
    "longitude": -122.072915
  },
  {
    "name": "CaFace",
    "rating": 3.5,
    "city": "Newark",
    "latitude": 37.54872,
    "longitude": -122.04929
  },
  {
    "name": "Tea Villa",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.45473517,
    "longitude": -121.9115719
  },
  {
    "name": "Mr Green Bubble",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.58957545,
    "longitude": -122.0206749
  },
  {
    "name": "Pop Tea Bar",
    "rating": 4,
    "city": "Palo Alto",
    "latitude": 37.42655,
    "longitude": -122.14632
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.43274,
    "longitude": -121.89277
  },
  {
    "name": "Joy 4 Tea",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.58941639,
    "longitude": -122.0676834
  },
  {
    "name": "Sweet CoCo",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.49369,
    "longitude": -121.93053
  },
  {
    "name": "Icy Blue",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.53259,
    "longitude": -121.91949
  },
  {
    "name": "TeaTop",
    "rating": 4.5,
    "city": "Milpitas",
    "latitude": 37.42644,
    "longitude": -121.92162
  },
  {
    "name": "Ten Ren Tea Co of Milpitas",
    "rating": 4.5,
    "city": "Milpitas",
    "latitude": 37.45558547,
    "longitude": -121.9099843
  },
  {
    "name": "Fantasia Coffee & Tea",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.42081517,
    "longitude": -121.9165921
  },
  {
    "name": "Tapioca Express",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.58944548,
    "longitude": -122.021834
  },
  {
    "name": "Gong Cha",
    "rating": 4,
    "city": "Palo Alto",
    "latitude": 37.447628,
    "longitude": -122.160728
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "San Leandro",
    "latitude": 37.68748718,
    "longitude": -122.1360236
  },
  {
    "name": "Boba Guys",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.7899434,
    "longitude": -122.4073063
  },
  {
    "name": "Boba Guys",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.75994,
    "longitude": -122.42112
  },
  {
    "name": "Wonderful Dessert & Cafe",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.7633253,
    "longitude": -122.4798778
  },
  {
    "name": "Little Sweet",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.781425,
    "longitude": -122.4608022
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.79631597,
    "longitude": -122.421976
  },
  {
    "name": "Boba Guys",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.78365,
    "longitude": -122.43247
  },
  {
    "name": "i-Tea",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.79057199,
    "longitude": -122.4043042
  },
  {
    "name": "Boba Guys",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.772885,
    "longitude": -122.4235464
  },
  {
    "name": "Plentea - San Francisco",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.79142644,
    "longitude": -122.404249
  },
  {
    "name": "Steap Tea Bar",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.79326044,
    "longitude": -122.4067625
  },
  {
    "name": "Purple Kow",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.775906,
    "longitude": -122.497818
  },
  {
    "name": "OMG Tea",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.7254643,
    "longitude": -122.402527
  },
  {
    "name": "Asha Tea House",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.78818949,
    "longitude": -122.4036682
  },
  {
    "name": "Super Cue Cafe",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.7429212,
    "longitude": -122.4782898
  },
  {
    "name": "Boba Guys",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.76656764,
    "longitude": -122.3970559
  },
  {
    "name": "InfiniTea",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.78029568,
    "longitude": -122.4770848
  },
  {
    "name": "STEEP",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.78033457,
    "longitude": -122.3957827
  },
  {
    "name": "Mr. T Cafe",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.72322,
    "longitude": -122.43556
  },
  {
    "name": "Tpumps",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.7636264,
    "longitude": -122.4785915
  },
  {
    "name": "TJ Cups",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.75339,
    "longitude": -122.48993
  },
  {
    "name": "Wondertea",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.76346681,
    "longitude": -122.4823866
  },
  {
    "name": "The Boba Shop",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.76355765,
    "longitude": -122.3885771
  },
  {
    "name": "STEEP Creamery & Tea",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.78253482,
    "longitude": -122.3911802
  },
  {
    "name": "Bubblecup",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.78227814,
    "longitude": -122.4796964
  },
  {
    "name": "Sweet A Little",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.77448,
    "longitude": -122.40916
  },
  {
    "name": "Tea Hut",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.78790507,
    "longitude": -122.4407617
  },
  {
    "name": "i-Tea",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.7635307,
    "longitude": -122.4811325
  },
  {
    "name": "Tancca",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.7804213,
    "longitude": -122.4732843
  },
  {
    "name": "Sharetea",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.78446433,
    "longitude": -122.4034429
  },
  {
    "name": "Mi-Tea",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.7639596,
    "longitude": -122.465019
  },
  {
    "name": "BB Tea Station",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.7542929,
    "longitude": -122.4779253
  },
  {
    "name": "Tea FM",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.74263912,
    "longitude": -122.4808923
  },
  {
    "name": "Keep it",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.79555932,
    "longitude": -122.4098162
  },
  {
    "name": "Mr & Mrs Tea House",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.78304429,
    "longitude": -122.4652418
  },
  {
    "name": "E Tea",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.78054677,
    "longitude": -122.476978
  },
  {
    "name": "Gosu",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.7829,
    "longitude": -122.47017
  },
  {
    "name": "Homeplate Boba",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.77870701,
    "longitude": -122.3901575
  },
  {
    "name": "Cuppa",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.73429,
    "longitude": -122.43417
  },
  {
    "name": "Super Cue Cafe",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.72429542,
    "longitude": -122.4570445
  },
  {
    "name": "Puppy Bobar",
    "rating": 5,
    "city": "San Francisco",
    "latitude": 37.79753995,
    "longitude": -122.40679
  },
  {
    "name": "Cool Tea Bar",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.794315,
    "longitude": -122.406927
  },
  {
    "name": "Little Heaven Deli",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.75948,
    "longitude": -122.41943
  },
  {
    "name": "5 Sweets",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.723259,
    "longitude": -122.4545593
  },
  {
    "name": "Good Earth Cafe",
    "rating": 4.5,
    "city": "San Francisco",
    "latitude": 37.7957899,
    "longitude": -122.40537
  },
  {
    "name": "Sweethut",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.78288767,
    "longitude": -122.4647183
  },
  {
    "name": "FrosTea",
    "rating": 3.5,
    "city": "Daly City",
    "latitude": 37.70689,
    "longitude": -122.4588
  },
  {
    "name": "Teaone",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.78076,
    "longitude": -122.47679
  },
  {
    "name": "Fifty / Fifty Coffee and Tea",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.7814293,
    "longitude": -122.4529495
  },
  {
    "name": "Honey Creme &Tea",
    "rating": 3.5,
    "city": "San Francisco",
    "latitude": 37.76384,
    "longitude": -122.46708
  },
  {
    "name": "BAMBU",
    "rating": 4,
    "city": "San Francisco",
    "latitude": 37.7804,
    "longitude": -122.48458
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.80061359,
    "longitude": -122.2706769
  },
  {
    "name": "Mr Green Bubble",
    "rating": 3.5,
    "city": "Oakland",
    "latitude": 37.828969,
    "longitude": -122.249297
  },
  {
    "name": "T&Bowl",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.8004754,
    "longitude": -122.2722423
  },
  {
    "name": "U Cha",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.86786971,
    "longitude": -122.2660823
  },
  {
    "name": "The Sweet Booth",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.80044556,
    "longitude": -122.2718353
  },
  {
    "name": "Asha Tea House",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.8719582,
    "longitude": -122.268859
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Alameda",
    "latitude": 37.7673552,
    "longitude": -122.24003
  },
  {
    "name": "T4",
    "rating": 3,
    "city": "Oakland",
    "latitude": 37.8009841,
    "longitude": -122.2700858
  },
  {
    "name": "Wing Man",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.83818,
    "longitude": -122.25168
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.8684064,
    "longitude": -122.2605113
  },
  {
    "name": "Happy Lemon Berkeley",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.87087,
    "longitude": -122.26857
  },
  {
    "name": "Milk Tea Lab",
    "rating": 4,
    "city": "Pleasant Hill",
    "latitude": 37.94857085,
    "longitude": -122.0581788
  },
  {
    "name": "Boba Ninja",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.86821,
    "longitude": -122.25803
  },
  {
    "name": "Sharetea",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.7867215,
    "longitude": -122.2813447
  },
  {
    "name": "Purple Kow",
    "rating": 3.5,
    "city": "Berkeley",
    "latitude": 37.8704335,
    "longitude": -122.2662693
  },
  {
    "name": "Teaway",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.76394,
    "longitude": -122.24266
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Walnut Creek",
    "latitude": 37.89813189,
    "longitude": -122.059291
  },
  {
    "name": "Sweetheart Cafe",
    "rating": 3.5,
    "city": "Oakland",
    "latitude": 37.7994484,
    "longitude": -122.2700968
  },
  {
    "name": "Gelato Firenze and QTea Bar",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.81106,
    "longitude": -122.24718
  },
  {
    "name": "Tea Delight",
    "rating": 4,
    "city": "Alameda",
    "latitude": 37.7708201,
    "longitude": -122.2775159
  },
  {
    "name": "Quickly",
    "rating": 4.5,
    "city": "Oakland",
    "latitude": 37.7765099,
    "longitude": -122.2250587
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "San Leandro",
    "latitude": 37.72272,
    "longitude": -122.15439
  },
  {
    "name": "50 Tea",
    "rating": 3.5,
    "city": "Oakland",
    "latitude": 37.8007358,
    "longitude": -122.270182
  },
  {
    "name": "Tea Press",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.86864,
    "longitude": -122.25779
  },
  {
    "name": "Taiwan Bento",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.81097,
    "longitude": -122.26651
  },
  {
    "name": "U Tea Cafe",
    "rating": 3,
    "city": "Oakland",
    "latitude": 37.80641265,
    "longitude": -122.2682921
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.76509,
    "longitude": -122.24233
  },
  {
    "name": "Teazzert",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.76353,
    "longitude": -122.24319
  },
  {
    "name": "QTeaBar",
    "rating": 5,
    "city": "Oakland",
    "latitude": 37.81106863,
    "longitude": -122.2472357
  },
  {
    "name": "The Burrow",
    "rating": 4.5,
    "city": "Brisbane",
    "latitude": 37.6834642,
    "longitude": -122.4028888
  },
  {
    "name": "Sweet Belly",
    "rating": 4.5,
    "city": "Oakland",
    "latitude": 37.80760948,
    "longitude": -122.26888
  },
  {
    "name": "Sancha Bar",
    "rating": 2.5,
    "city": "Oakland",
    "latitude": 37.79896158,
    "longitude": -122.2688238
  },
  {
    "name": "Alice Street Bakery Café",
    "rating": 4.5,
    "city": "Oakland",
    "latitude": 37.79962921,
    "longitude": -122.2683716
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.723825,
    "longitude": -122.154663
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "Oakland",
    "latitude": 37.81062178,
    "longitude": -122.2439262
  },
  {
    "name": "Bubble Tea Share Time",
    "rating": 4,
    "city": "Berkeley",
    "latitude": 37.87316305,
    "longitude": -122.2685771
  },
  {
    "name": "Shooting Star Cafe",
    "rating": 3.5,
    "city": "Oakland",
    "latitude": 37.800992,
    "longitude": -122.2701305
  },
  {
    "name": "Pekoe",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.3145585,
    "longitude": -121.790189
  },
  {
    "name": "Tea Lyfe Drinks",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.33234432,
    "longitude": -121.8577422
  },
  {
    "name": "Teahee",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.33114876,
    "longitude": -121.8573767
  },
  {
    "name": "Boba Pub",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.25336,
    "longitude": -121.9015
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.3157651,
    "longitude": -121.9782757
  },
  {
    "name": "Passion-T Snacks and Desserts",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.3105199,
    "longitude": -121.84997
  },
  {
    "name": "Pop Up Tea, Coffee & Snacks",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.26703262,
    "longitude": -121.834053
  },
  {
    "name": "Happy Lemon",
    "rating": 4.5,
    "city": "San Jose",
    "latitude": 37.308647,
    "longitude": -121.813461
  },
  {
    "name": "Boba Bar",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.332404,
    "longitude": -121.8845467
  },
  {
    "name": "Sinceretea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.3529399,
    "longitude": -121.89176
  },
  {
    "name": "Bobateani",
    "rating": 5,
    "city": "San Jose",
    "latitude": 37.33709,
    "longitude": -121.88941
  },
  {
    "name": "Soyful Desserts",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.33198757,
    "longitude": -121.8567742
  },
  {
    "name": "One Tea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.33862955,
    "longitude": -121.8857068
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.31225168,
    "longitude": -121.8097693
  },
  {
    "name": "The Tea Zone & Fruit Bar",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.309534,
    "longitude": -121.949649
  },
  {
    "name": "Createave Cafe",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.38698002,
    "longitude": -121.8835761
  },
  {
    "name": "Tleaf Teapresso",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.2486886,
    "longitude": -121.8579708
  },
  {
    "name": "Katea",
    "rating": 4.5,
    "city": "San Jose",
    "latitude": 37.2525199,
    "longitude": -121.8501
  },
  {
    "name": "TeaTop",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.30865701,
    "longitude": -122.0125922
  },
  {
    "name": "Bubbly",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.32229,
    "longitude": -121.82405
  },
  {
    "name": "Vampire Penguin featuring Jastea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.40417704,
    "longitude": -121.8819331
  },
  {
    "name": "Simply Boba",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.30885467,
    "longitude": -121.8132025
  },
  {
    "name": "Happy Lemon",
    "rating": 4.5,
    "city": "Cupertino",
    "latitude": 37.32258,
    "longitude": -122.03121
  },
  {
    "name": "Amor Cafe and Tea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.335455,
    "longitude": -121.886596
  },
  {
    "name": "Shincha Tea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.31917728,
    "longitude": -121.8270416
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Santa Clara",
    "latitude": 37.34866,
    "longitude": -121.94616
  },
  {
    "name": "ChaTime San Jose",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.36970208,
    "longitude": -121.8453674
  },
  {
    "name": "Pure Tea Bar",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.236431,
    "longitude": -121.804763
  },
  {
    "name": "T Spot Boba Drinks & Snacks",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.3879799,
    "longitude": -121.8588819
  },
  {
    "name": "Meow Tea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.29956,
    "longitude": -121.84016
  },
  {
    "name": "Fantasia Coffee & Tea",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.31947562,
    "longitude": -121.947621
  },
  {
    "name": "Monster Boba",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.31128821,
    "longitude": -122.023624
  },
  {
    "name": "Teasociety",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.30615468,
    "longitude": -121.8105193
  },
  {
    "name": "BFresh Snacks & Drinks",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.30864716,
    "longitude": -121.8134613
  },
  {
    "name": "BeiBay Tea",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.24970814,
    "longitude": -121.8792868
  },
  {
    "name": "Gong Cha",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.38753,
    "longitude": -121.88725
  },
  {
    "name": "Sweet Gelato Tea Lounge",
    "rating": 4.5,
    "city": "San Jose",
    "latitude": 37.33133611,
    "longitude": -121.8573819
  },
  {
    "name": "Sharetea",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.387508,
    "longitude": -121.882934
  },
  {
    "name": "Gong Cha",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.29234201,
    "longitude": -121.9887444
  },
  {
    "name": "Soyful Desserts",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.30907459,
    "longitude": -121.8144266
  },
  {
    "name": "Oooh",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.309508,
    "longitude": -121.809918
  },
  {
    "name": "The Tea Zone Lounge",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.37201899,
    "longitude": -121.8461253
  },
  {
    "name": "The Moo Bar",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.34594004,
    "longitude": -121.979152
  },
  {
    "name": "Tapioca Express",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.30303748,
    "longitude": -121.8646013
  },
  {
    "name": "Purple Kow",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.32103523,
    "longitude": -121.825406
  },
  {
    "name": "Heritage Eats",
    "rating": 4.5,
    "city": "Napa",
    "latitude": 38.32387,
    "longitude": -122.30711
  },
  {
    "name": "YoBelle",
    "rating": 3.5,
    "city": "Napa",
    "latitude": 38.2991692,
    "longitude": -122.2852838
  },
  {
    "name": "Morimoto Napa",
    "rating": 4,
    "city": "Napa",
    "latitude": 38.29671,
    "longitude": -122.28328
  },
  {
    "name": "Napa Noodles",
    "rating": 3,
    "city": "Napa",
    "latitude": 38.29883405,
    "longitude": -122.2864587
  },
  {
    "name": "Crave Cafe & Catering",
    "rating": 3.5,
    "city": "American Canyon",
    "latitude": 38.16897553,
    "longitude": -122.2543058
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "American Canyon",
    "latitude": 38.18488777,
    "longitude": -122.2536975
  },
  {
    "name": "Top That Frozen Yogurt",
    "rating": 3.5,
    "city": "Sonoma",
    "latitude": 38.29141438,
    "longitude": -122.4580584
  },
  {
    "name": "Over The Top Shop Frozen Yogurt",
    "rating": 2.5,
    "city": "American Canyon",
    "latitude": 38.18098,
    "longitude": -122.25395
  },
  {
    "name": "Sushi Grill",
    "rating": 4,
    "city": "Vallejo",
    "latitude": 38.14808826,
    "longitude": -122.2529962
  },
  {
    "name": "Palm Thai Bistro",
    "rating": 4.5,
    "city": "Fairfield",
    "latitude": 38.215523,
    "longitude": -122.143181
  },
  {
    "name": "Green Bamboo Restaurant",
    "rating": 3.5,
    "city": "Fairfield",
    "latitude": 38.2219399,
    "longitude": -122.12513
  },
  {
    "name": "Thai Kitchen",
    "rating": 3.5,
    "city": "American Canyon",
    "latitude": 38.17015,
    "longitude": -122.25411
  },
  {
    "name": "SactoMofo",
    "rating": 3.5,
    "city": "Sacramento",
    "latitude": 38.67463,
    "longitude": -121.50861
  },
  {
    "name": "Westea",
    "rating": 4,
    "city": "Pleasanton",
    "latitude": 37.69838055,
    "longitude": -121.8741244
  },
  {
    "name": "BaoTea Cafe",
    "rating": 4.5,
    "city": "Pleasanton",
    "latitude": 37.658818,
    "longitude": -121.898176
  },
  {
    "name": "i-Tea - Dublin",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70319896,
    "longitude": -121.8658621
  },
  {
    "name": "Aroma Tapioca Tea & Coffee",
    "rating": 3.5,
    "city": "Pleasanton",
    "latitude": 37.69288,
    "longitude": -121.90177
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Pleasanton",
    "latitude": 37.6659099,
    "longitude": -121.87418
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Dublin",
    "latitude": 37.7038018,
    "longitude": -121.8511682
  },
  {
    "name": "Tea Factory",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.7222341,
    "longitude": -121.9419009
  },
  {
    "name": "ICICLES",
    "rating": 4,
    "city": "Pleasanton",
    "latitude": 37.661346,
    "longitude": -121.87506
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.7103899,
    "longitude": -121.92744
  },
  {
    "name": "Cafe Tapioca",
    "rating": 3.5,
    "city": "Dublin",
    "latitude": 37.703959,
    "longitude": -121.9342246
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "Pleasanton",
    "latitude": 37.69565444,
    "longitude": -121.9293179
  },
  {
    "name": "LeTea",
    "rating": 2.5,
    "city": "Pleasanton",
    "latitude": 37.69956,
    "longitude": -121.87326
  },
  {
    "name": "Tea Breeze",
    "rating": 3,
    "city": "Pleasanton",
    "latitude": 37.69948196,
    "longitude": -121.8740845
  },
  {
    "name": "360 Crepes",
    "rating": 4,
    "city": "Pleasanton",
    "latitude": 37.6905054,
    "longitude": -121.8774678
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "San Ramon",
    "latitude": 37.73021,
    "longitude": -121.93009
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "San Ramon",
    "latitude": 37.7241,
    "longitude": -121.94435
  },
  {
    "name": "Snowflake",
    "rating": 3.5,
    "city": "Dublin",
    "latitude": 37.70480597,
    "longitude": -121.8751506
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "Dublin",
    "latitude": 37.705825,
    "longitude": -121.876084
  },
  {
    "name": "Cafe Taiwan",
    "rating": 4,
    "city": "Pleasanton",
    "latitude": 37.669658,
    "longitude": -121.858772
  },
  {
    "name": "Cafe Junction",
    "rating": 4,
    "city": "Pleasanton",
    "latitude": 37.6994,
    "longitude": -121.9048344
  },
  {
    "name": "O'Honey",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70495645,
    "longitude": -121.8515379
  },
  {
    "name": "The Mix Creamery",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70438024,
    "longitude": -121.9115549
  },
  {
    "name": "Tasty Pot",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.704566,
    "longitude": -121.87545
  },
  {
    "name": "Ohana Hawaiian BBQ of Pleasanton",
    "rating": 3,
    "city": "Pleasanton",
    "latitude": 37.65223,
    "longitude": -121.8786
  },
  {
    "name": "99 Ranch Market",
    "rating": 3.5,
    "city": "Pleasanton",
    "latitude": 37.69956,
    "longitude": -121.87326
  },
  {
    "name": "Menchie's  Frozen Yogurt",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70372106,
    "longitude": -121.8514805
  },
  {
    "name": "Blossom Bee",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.71085847,
    "longitude": -121.9264197
  },
  {
    "name": "Berry Delight",
    "rating": 3,
    "city": "Pleasanton",
    "latitude": 37.6946294,
    "longitude": -121.931563
  },
  {
    "name": "New Thai Bistro",
    "rating": 4.5,
    "city": "Pleasanton",
    "latitude": 37.67718,
    "longitude": -121.87578
  },
  {
    "name": "Tutti Frutti Frozen Yogurt",
    "rating": 3,
    "city": "Dublin",
    "latitude": 37.70402563,
    "longitude": -121.8853284
  },
  {
    "name": "Kee Wah Bakery",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.7045784,
    "longitude": -121.8758087
  },
  {
    "name": "Blush Organic Frozen Yogurt",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70801,
    "longitude": -121.8731
  },
  {
    "name": "Koi Palace",
    "rating": 3.5,
    "city": "Dublin",
    "latitude": 37.70463675,
    "longitude": -121.8760264
  },
  {
    "name": "Berry & Berry Yogurt",
    "rating": 2.5,
    "city": "Livermore",
    "latitude": 37.69805074,
    "longitude": -121.8422487
  },
  {
    "name": "Pho Saigon City",
    "rating": 3,
    "city": "Pleasanton",
    "latitude": 37.69946264,
    "longitude": -121.8738575
  },
  {
    "name": "Yogurtland",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70584,
    "longitude": -121.92709
  },
  {
    "name": "Lee's Sandwiches",
    "rating": 3.5,
    "city": "Dublin",
    "latitude": 37.70619,
    "longitude": -121.87379
  },
  {
    "name": "Osaka Ramen",
    "rating": 3,
    "city": "Dublin",
    "latitude": 37.70515,
    "longitude": -121.87622
  },
  {
    "name": "Pho 99",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.710269,
    "longitude": -121.92861
  },
  {
    "name": "Tandoori Pizza",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70314172,
    "longitude": -121.8660247
  },
  {
    "name": "Halu Shabu Shabu",
    "rating": 3,
    "city": "Dublin",
    "latitude": 37.70456696,
    "longitude": -121.8754501
  },
  {
    "name": "Amakara",
    "rating": 4,
    "city": "Dublin",
    "latitude": 37.70506,
    "longitude": -121.93487
  },
  {
    "name": "Pho Saigon Garden",
    "rating": 3.5,
    "city": "Dublin",
    "latitude": 37.7056511,
    "longitude": -121.9336583
  },
  {
    "name": "Pho Saigon Noodle House",
    "rating": 3.5,
    "city": "San Ramon",
    "latitude": 37.72938919,
    "longitude": -121.9314423
  },
  {
    "name": "85°C Bakery Cafe",
    "rating": 3.5,
    "city": "Newark",
    "latitude": 37.54772,
    "longitude": -122.0466
  },
  {
    "name": "BlackBall Desserts-Union City",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.5866448,
    "longitude": -122.0201868
  },
  {
    "name": "Tasty Pot",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.5508,
    "longitude": -122.0509
  },
  {
    "name": "ICICLES",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.52314,
    "longitude": -122.00792
  },
  {
    "name": "Che-Lo",
    "rating": 4.5,
    "city": "Union City",
    "latitude": 37.58956283,
    "longitude": -122.0224927
  },
  {
    "name": "Fusion Mix Frozen Yogurt",
    "rating": 4.5,
    "city": "Fremont",
    "latitude": 37.54360179,
    "longitude": -121.9840611
  },
  {
    "name": "Crepe Bar",
    "rating": 4,
    "city": "Newark",
    "latitude": 37.5282308,
    "longitude": -122.0002458
  },
  {
    "name": "Q Cup",
    "rating": 3,
    "city": "Fremont",
    "latitude": 37.54616995,
    "longitude": -121.9874015
  },
  {
    "name": "BAMBU",
    "rating": 3.5,
    "city": "Newark",
    "latitude": 37.52365871,
    "longitude": -122.0071447
  },
  {
    "name": "BAMBU",
    "rating": 3.5,
    "city": "Union City",
    "latitude": 37.59146031,
    "longitude": -122.0711114
  },
  {
    "name": "Storm Crepes",
    "rating": 4.5,
    "city": "Newark",
    "latitude": 37.52181699,
    "longitude": -121.9973665
  },
  {
    "name": "Sweet Orchid",
    "rating": 4.5,
    "city": "Fremont",
    "latitude": 37.57511876,
    "longitude": -122.0388597
  },
  {
    "name": "Jenjon's Cafe",
    "rating": 4,
    "city": "Union City",
    "latitude": 37.58905851,
    "longitude": -122.0187637
  },
  {
    "name": "K-Pop Cafe",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.570362,
    "longitude": -122.0318791
  },
  {
    "name": "Milkcow",
    "rating": 3.5,
    "city": "Fremont",
    "latitude": 37.50466,
    "longitude": -121.97634
  },
  {
    "name": "Boba Guys",
    "rating": 4,
    "city": "San Carlos",
    "latitude": 37.50274025,
    "longitude": -122.2569802
  },
  {
    "name": "Teaquation",
    "rating": 4.5,
    "city": "Redwood City",
    "latitude": 37.48395094,
    "longitude": -122.2326535
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Hayward",
    "latitude": 37.67314354,
    "longitude": -122.0820344
  },
  {
    "name": "Sweet Spot",
    "rating": 4.5,
    "city": "Castro Valley",
    "latitude": 37.69609642,
    "longitude": -122.078565
  },
  {
    "name": "Teaster",
    "rating": 3.5,
    "city": "Hayward",
    "latitude": 37.66601881,
    "longitude": -122.108395
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Palo Alto",
    "latitude": 37.445381,
    "longitude": -122.160994
  },
  {
    "name": "Chatime",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.487118,
    "longitude": -122.229624
  },
  {
    "name": "Eko Coffee Bar & Tea House",
    "rating": 4,
    "city": "Hayward",
    "latitude": 37.67370701,
    "longitude": -122.0813971
  },
  {
    "name": "Tea Era",
    "rating": 4,
    "city": "Cupertino",
    "latitude": 37.33715042,
    "longitude": -122.0403525
  },
  {
    "name": "Fantasia Coffee & Tea",
    "rating": 4,
    "city": "Cupertino",
    "latitude": 37.33611592,
    "longitude": -122.0158903
  },
  {
    "name": "Tpumps",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.32323843,
    "longitude": -122.0229497
  },
  {
    "name": "Super Cue Cafe",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.3223943,
    "longitude": -122.0167496
  },
  {
    "name": "Happy Lemon",
    "rating": 4.5,
    "city": "Cupertino",
    "latitude": 37.3362175,
    "longitude": -122.0151378
  },
  {
    "name": "Ten Ren Tea",
    "rating": 4,
    "city": "Cupertino",
    "latitude": 37.33564843,
    "longitude": -122.0149567
  },
  {
    "name": "Meet Fresh",
    "rating": 3,
    "city": "Cupertino",
    "latitude": 37.3243651,
    "longitude": -122.0105533
  },
  {
    "name": "Hechaa",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.31361,
    "longitude": -122.03263
  },
  {
    "name": "Calibear Cyber Cafe",
    "rating": 4.5,
    "city": "Sunnyvale",
    "latitude": 37.35065,
    "longitude": -122.04962
  },
  {
    "name": "Happy Lemon",
    "rating": 4.5,
    "city": "Sunnyvale",
    "latitude": 37.36189,
    "longitude": -122.02454
  },
  {
    "name": "What8ver Express",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.32449874,
    "longitude": -122.0340782
  },
  {
    "name": "Gong Cha",
    "rating": 4.5,
    "city": "Sunnyvale",
    "latitude": 37.33929,
    "longitude": -122.04255
  },
  {
    "name": "Cafe LaTTea",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.32324132,
    "longitude": -122.0122615
  },
  {
    "name": "T4 Cupertino",
    "rating": 4,
    "city": "Cupertino",
    "latitude": 37.32328,
    "longitude": -122.01283
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Sunnyvale",
    "latitude": 37.36235728,
    "longitude": -122.0272561
  },
  {
    "name": "Tea Chansii",
    "rating": 3,
    "city": "Cupertino",
    "latitude": 37.32439893,
    "longitude": -122.0111383
  },
  {
    "name": "Verde Tea House",
    "rating": 3.5,
    "city": "Cupertino",
    "latitude": 37.3162384,
    "longitude": -122.0325089
  },
  {
    "name": "Bubble Tea Time",
    "rating": 4,
    "city": "Saratoga",
    "latitude": 37.29165,
    "longitude": -121.99636
  },
  {
    "name": "The Tea Zone & Fruit Bar",
    "rating": 4.5,
    "city": "Mountain View",
    "latitude": 37.38565,
    "longitude": -122.08442
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "Santa Clara",
    "latitude": 37.35198771,
    "longitude": -121.9912302
  },
  {
    "name": "Beastea",
    "rating": 4,
    "city": "Santa Clara",
    "latitude": 37.35297,
    "longitude": -121.97705
  },
  {
    "name": "Teaspoon",
    "rating": 3.5,
    "city": "Mountain View",
    "latitude": 37.3934799,
    "longitude": -122.07956
  },
  {
    "name": "Tea Annie",
    "rating": 4,
    "city": "Mountain View",
    "latitude": 37.3723,
    "longitude": -122.08801
  },
  {
    "name": "Verde Tea Cafe",
    "rating": 3.5,
    "city": "Mountain View",
    "latitude": 37.39417106,
    "longitude": -122.0795488
  },
  {
    "name": "TeaFans",
    "rating": 3.5,
    "city": "Sunnyvale",
    "latitude": 37.3813699,
    "longitude": -122.00808
  },
  {
    "name": "85°C Bakery Cafe",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.30358094,
    "longitude": -122.0324032
  },
  {
    "name": "Matcha Love",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.31496321,
    "longitude": -121.9780952
  },
  {
    "name": "BAMBU",
    "rating": 3.5,
    "city": "Sunnyvale",
    "latitude": 37.37631755,
    "longitude": -122.0313259
  },
  {
    "name": "Icicles",
    "rating": 4,
    "city": "Cupertino",
    "latitude": 37.32251774,
    "longitude": -122.0179255
  },
  {
    "name": "Sunnywich Cafe",
    "rating": 4.5,
    "city": "Sunnyvale",
    "latitude": 37.38788224,
    "longitude": -122.0245363
  },
  {
    "name": "Ocha Tea Café & Restaurant",
    "rating": 3.5,
    "city": "Mountain View",
    "latitude": 37.37704052,
    "longitude": -122.0766833
  },
  {
    "name": "Bubble Bay Tea",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.39287521,
    "longitude": -121.9773912
  },
  {
    "name": "Jazen Tea",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.3065639,
    "longitude": -122.0328361
  },
  {
    "name": "Comebuy Tea & Coffee",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.3822051,
    "longitude": -121.9761898
  },
  {
    "name": "Music Tunnel KTV Cafe",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.30529,
    "longitude": -122.03167
  },
  {
    "name": "Jazen Tea",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.3882893,
    "longitude": -121.9835596
  },
  {
    "name": "Butterfly",
    "rating": 4,
    "city": "Santa Clara",
    "latitude": 37.3503116,
    "longitude": -121.9438457
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "Cupertino",
    "latitude": 37.32349,
    "longitude": -122.047397
  },
  {
    "name": "California Mochi",
    "rating": 4,
    "city": "Santa Clara",
    "latitude": 37.35177231,
    "longitude": -121.9811935
  },
  {
    "name": "T4 Livermore",
    "rating": 4,
    "city": "Livermore",
    "latitude": 37.68077,
    "longitude": -121.74804
  },
  {
    "name": "Orange Tea",
    "rating": 4.5,
    "city": "Livermore",
    "latitude": 37.71191015,
    "longitude": -121.7233515
  },
  {
    "name": "Big Fat Straw Cafe",
    "rating": 4,
    "city": "Livermore",
    "latitude": 37.6761475,
    "longitude": -121.7851107
  },
  {
    "name": "Donut Wheel",
    "rating": 4,
    "city": "Livermore",
    "latitude": 37.68074799,
    "longitude": -121.7708359
  },
  {
    "name": "T4",
    "rating": 3,
    "city": "San Ramon",
    "latitude": 37.77495331,
    "longitude": -121.9240737
  },
  {
    "name": "Saigon Cafe",
    "rating": 4,
    "city": "Livermore",
    "latitude": 37.68,
    "longitude": -121.77058
  },
  {
    "name": "Rice Paper Bistro",
    "rating": 3.5,
    "city": "Livermore",
    "latitude": 37.71817566,
    "longitude": -121.7248083
  },
  {
    "name": "Menchie's Frozen Yogurt",
    "rating": 4,
    "city": "Livermore",
    "latitude": 37.6783516,
    "longitude": -121.7841207
  },
  {
    "name": "La Farfalla Bakery",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.55669328,
    "longitude": -121.9524483
  },
  {
    "name": "Ice3 Creamery",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.556529,
    "longitude": -121.952556
  },
  {
    "name": "Yogurt Shop",
    "rating": 4,
    "city": "Danville",
    "latitude": 37.7986554,
    "longitude": -121.9187406
  },
  {
    "name": "Bean Scene Cafe",
    "rating": 4,
    "city": "Fremont",
    "latitude": 37.532729,
    "longitude": -121.95934
  },
  {
    "name": "Yogurtland",
    "rating": 4,
    "city": "San Ramon",
    "latitude": 37.76241772,
    "longitude": -121.9609002
  },
  {
    "name": "Chilly & Munch",
    "rating": 4.5,
    "city": "Mountain View",
    "latitude": 37.40681096,
    "longitude": -122.1069847
  },
  {
    "name": "Jazen Tea",
    "rating": 3,
    "city": "Mountain View",
    "latitude": 37.3936615,
    "longitude": -122.0794449
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.44451,
    "longitude": -122.16337
  },
  {
    "name": "Pearl Cafe",
    "rating": 3.5,
    "city": "Mountain View",
    "latitude": 37.40298286,
    "longitude": -122.1067611
  },
  {
    "name": "Tapioca Express",
    "rating": 3,
    "city": "Mountain View",
    "latitude": 37.39379,
    "longitude": -122.07839
  },
  {
    "name": "Teaspoon",
    "rating": 4.5,
    "city": "Palo Alto",
    "latitude": 37.434085,
    "longitude": -122.129446
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.42868,
    "longitude": -121.91132
  },
  {
    "name": "Teasociety",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.4341782,
    "longitude": -121.9007438
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.42074041,
    "longitude": -121.9166489
  },
  {
    "name": "BCUTE tea drinks and finger foods",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.42649015,
    "longitude": -121.9099963
  },
  {
    "name": "Poke Xpress",
    "rating": 4.5,
    "city": "Milpitas",
    "latitude": 37.41280998,
    "longitude": -121.9029776
  },
  {
    "name": "Happy Lemon",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.42747066,
    "longitude": -121.9107824
  },
  {
    "name": "Yummi Tea Cafe",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.414925,
    "longitude": -121.875899
  },
  {
    "name": "Sno-Crave Tea House",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.4558077,
    "longitude": -121.9111928
  },
  {
    "name": "Sancha Bar",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.4464966,
    "longitude": -121.9040161
  },
  {
    "name": "Chick & Tea",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.45518875,
    "longitude": -121.9115219
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.3973732,
    "longitude": -121.8736877
  },
  {
    "name": "Queen's Cafe",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.42246495,
    "longitude": -121.9166735
  },
  {
    "name": "The Pennywort",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.40685,
    "longitude": -121.88672
  },
  {
    "name": "BAMBU",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.38620888,
    "longitude": -121.884416
  },
  {
    "name": "Black Pearl",
    "rating": 3,
    "city": "San Jose",
    "latitude": 37.38431592,
    "longitude": -121.8974417
  },
  {
    "name": "Happiness Cafe",
    "rating": 4.5,
    "city": "San Jose",
    "latitude": 37.38638815,
    "longitude": -121.8848032
  },
  {
    "name": "85°C Bakery Cafe",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.419465,
    "longitude": -121.915568
  },
  {
    "name": "Simpletea",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.416848,
    "longitude": -121.8768983
  },
  {
    "name": "BAMBU",
    "rating": 3.5,
    "city": "Milpitas",
    "latitude": 37.433926,
    "longitude": -121.884259
  },
  {
    "name": "Fantasia Coffee & Tea",
    "rating": 3,
    "city": "Santa Clara",
    "latitude": 37.39530359,
    "longitude": -121.9465407
  },
  {
    "name": "Shihlin Taiwan Street Snacks",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.420773,
    "longitude": -121.916405
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "Milpitas",
    "latitude": 37.41787518,
    "longitude": -121.874393
  },
  {
    "name": "Honeyberry",
    "rating": 4.5,
    "city": "San Jose",
    "latitude": 37.40931386,
    "longitude": -121.9452192
  },
  {
    "name": "Aroma Coffee and Snacks",
    "rating": 4,
    "city": "Milpitas",
    "latitude": 37.41684595,
    "longitude": -121.8767741
  },
  {
    "name": "Teatime",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.48460421,
    "longitude": -122.2324271
  },
  {
    "name": "Comebuy Drinks",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.4868,
    "longitude": -122.22766
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.48616013,
    "longitude": -122.2307402
  },
  {
    "name": "DAVIDsTEA",
    "rating": 4.5,
    "city": "Palo Alto",
    "latitude": 37.4461057,
    "longitude": -122.1610267
  },
  {
    "name": "pokéLOVE",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.438632,
    "longitude": -122.160532
  },
  {
    "name": "Bare Bowls",
    "rating": 4,
    "city": "Palo Alto",
    "latitude": 37.44413,
    "longitude": -122.16237
  },
  {
    "name": "Tea Time",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.4446106,
    "longitude": -122.1615448
  },
  {
    "name": "Chantal Guillon Macarons & Teas",
    "rating": 4.5,
    "city": "Palo Alto",
    "latitude": 37.44752,
    "longitude": -122.15965
  },
  {
    "name": "Happy Donuts",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.41643,
    "longitude": -122.13004
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "Sunnyvale",
    "latitude": 37.39007619,
    "longitude": -122.0421847
  },
  {
    "name": "Fraiche",
    "rating": 4,
    "city": "Palo Alto",
    "latitude": 37.44387547,
    "longitude": -122.1615958
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "Redwood City",
    "latitude": 37.49179319,
    "longitude": -122.2241925
  },
  {
    "name": "Coupa Café",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.444682,
    "longitude": -122.161533
  },
  {
    "name": "CREAM",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.447555,
    "longitude": -122.159804
  },
  {
    "name": "Ohana Express",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.46868,
    "longitude": -122.224
  },
  {
    "name": "Yogurtland",
    "rating": 4,
    "city": "Palo Alto",
    "latitude": 37.4480657,
    "longitude": -122.159221
  },
  {
    "name": "Coupa Café - Lytton",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.44447184,
    "longitude": -122.1652222
  },
  {
    "name": "Green Bakery & Café",
    "rating": 3.5,
    "city": "Los Altos",
    "latitude": 37.36046729,
    "longitude": -122.096757
  },
  {
    "name": "Wild Berry Yogurt",
    "rating": 3.5,
    "city": "Menlo Park",
    "latitude": 37.42398,
    "longitude": -122.19693
  },
  {
    "name": "The Posh Bagel",
    "rating": 3.5,
    "city": "Los Altos",
    "latitude": 37.3783798,
    "longitude": -122.1170197
  },
  {
    "name": "Paris Baguette",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.44719696,
    "longitude": -122.1607819
  },
  {
    "name": "Taza Deli & Cafe",
    "rating": 5,
    "city": "Redwood City",
    "latitude": 37.4868656,
    "longitude": -122.2234133
  },
  {
    "name": "Rojoz Gourmet Wraps",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.41883,
    "longitude": -122.1099
  },
  {
    "name": "Froyola",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.48674829,
    "longitude": -122.2293601
  },
  {
    "name": "Mr. Green Bubble",
    "rating": 5,
    "city": "Sunnyvale",
    "latitude": 37.35338,
    "longitude": -122.05071
  },
  {
    "name": "Coupa Cafe - Green Library",
    "rating": 3.5,
    "city": "Stanford",
    "latitude": 37.42624934,
    "longitude": -122.1670675
  },
  {
    "name": "Dohatsuten",
    "rating": 3.5,
    "city": "Palo Alto",
    "latitude": 37.42031097,
    "longitude": -122.1023483
  },
  {
    "name": "Panda Express",
    "rating": 2,
    "city": "Mountain View",
    "latitude": 37.39098377,
    "longitude": -122.0952941
  },
  {
    "name": "Nekter Juice Bar",
    "rating": 3.5,
    "city": "Mountain View",
    "latitude": 37.4015599,
    "longitude": -122.1132477
  },
  {
    "name": "Green Leaf Asian Bistro & Cafe",
    "rating": 4,
    "city": "Redwood City",
    "latitude": 37.48575022,
    "longitude": -122.2288349
  },
  {
    "name": "Koma Sushi Restaurant",
    "rating": 3.5,
    "city": "Menlo Park",
    "latitude": 37.4483544,
    "longitude": -122.1743768
  },
  {
    "name": "The Axe and Palm",
    "rating": 2.5,
    "city": "Stanford",
    "latitude": 37.42537175,
    "longitude": -122.1705437
  },
  {
    "name": "Cocohodo",
    "rating": 4,
    "city": "Sunnyvale",
    "latitude": 37.35172645,
    "longitude": -122.0025056
  },
  {
    "name": "Hotpot First",
    "rating": 3.5,
    "city": "Sunnyvale",
    "latitude": 37.3973885,
    "longitude": -121.9967194
  },
  {
    "name": "Bean Scene",
    "rating": 3.5,
    "city": "Sunnyvale",
    "latitude": 37.3761834,
    "longitude": -122.0301825
  },
  {
    "name": "Sharetea",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.32551,
    "longitude": -121.94462
  },
  {
    "name": "Jazen Tea Santa Clara",
    "rating": 2.5,
    "city": "Santa Clara",
    "latitude": 37.35158639,
    "longitude": -121.9927015
  },
  {
    "name": "Honeyberry",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.35156815,
    "longitude": -121.9928447
  },
  {
    "name": "World Wrapps 2.0",
    "rating": 4.5,
    "city": "Santa Clara",
    "latitude": 37.38919,
    "longitude": -121.98339
  },
  {
    "name": "Youji Fresh Rolls Wine & Tea",
    "rating": 2.5,
    "city": "Santa Clara",
    "latitude": 37.32603649,
    "longitude": -121.9441652
  },
  {
    "name": "Frozo's Frozen Yogurt",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.3503848,
    "longitude": -121.9437883
  },
  {
    "name": "Cool Tea Bar",
    "rating": 3.5,
    "city": "South San Francisco",
    "latitude": 37.64925515,
    "longitude": -122.4295569
  },
  {
    "name": "Tiger Tea & Juice",
    "rating": 4.5,
    "city": "Burlingame",
    "latitude": 37.594114,
    "longitude": -122.384605
  },
  {
    "name": "Aqua Club Dessert & Beverage",
    "rating": 4.5,
    "city": "San Bruno",
    "latitude": 37.622566,
    "longitude": -122.410942
  },
  {
    "name": "Bobabia",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5671988,
    "longitude": -122.3253964
  },
  {
    "name": "Happy Lemon",
    "rating": 4,
    "city": "Burlingame",
    "latitude": 37.5773026,
    "longitude": -122.3486125
  },
  {
    "name": "Eggettes",
    "rating": 4,
    "city": "South San Francisco",
    "latitude": 37.6492265,
    "longitude": -122.4302143
  },
  {
    "name": "Tpumps",
    "rating": 4,
    "city": "Burlingame",
    "latitude": 37.57943796,
    "longitude": -122.345903
  },
  {
    "name": "Teaspoon",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.564318,
    "longitude": -122.3238431
  },
  {
    "name": "Cha Express",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5649713,
    "longitude": -122.3228903
  },
  {
    "name": "Search Tea",
    "rating": 4,
    "city": "Millbrae",
    "latitude": 37.61218,
    "longitude": -122.404
  },
  {
    "name": "Tea World",
    "rating": 4,
    "city": "Pacifica",
    "latitude": 37.6337492,
    "longitude": -122.4887216
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Millbrae",
    "latitude": 37.601183,
    "longitude": -122.392173
  },
  {
    "name": "i-Tea",
    "rating": 5,
    "city": "Burlingame",
    "latitude": 37.5801206,
    "longitude": -122.3468891
  },
  {
    "name": "Boba Dude",
    "rating": 3.5,
    "city": "Half Moon Bay",
    "latitude": 37.4702204,
    "longitude": -122.4355691
  },
  {
    "name": "Eggettes",
    "rating": 4,
    "city": "Millbrae",
    "latitude": 37.60484094,
    "longitude": -122.3972783
  },
  {
    "name": "Gong Cha",
    "rating": 3.5,
    "city": "San Mateo",
    "latitude": 37.5667191,
    "longitude": -122.3239517
  },
  {
    "name": "BAMBU",
    "rating": 3.5,
    "city": "South San Francisco",
    "latitude": 37.649195,
    "longitude": -122.4530236
  },
  {
    "name": "Super Cue Cafe",
    "rating": 3.5,
    "city": "San Mateo",
    "latitude": 37.54447331,
    "longitude": -122.2850522
  },
  {
    "name": "BAMBU",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5665365,
    "longitude": -122.3232678
  },
  {
    "name": "Eggettes",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.56741,
    "longitude": -122.32407
  },
  {
    "name": "Chatime",
    "rating": 3.5,
    "city": "San Mateo",
    "latitude": 37.56413,
    "longitude": -122.32294
  },
  {
    "name": "Tpumps",
    "rating": 4,
    "city": "Foster City",
    "latitude": 37.55735314,
    "longitude": -122.2747423
  },
  {
    "name": "Creme Brewlee",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.54489899,
    "longitude": -122.2850236
  },
  {
    "name": "Chatime",
    "rating": 3.5,
    "city": "Foster City",
    "latitude": 37.544739,
    "longitude": -122.271085
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "San Mateo",
    "latitude": 37.56436157,
    "longitude": -122.3235245
  },
  {
    "name": "Fresh Nation Desserts",
    "rating": 3,
    "city": "San Mateo",
    "latitude": 37.5633809,
    "longitude": -122.3251999
  },
  {
    "name": "Ya-Ua Yogurt & Boba Tea",
    "rating": 4,
    "city": "Belmont",
    "latitude": 37.5102232,
    "longitude": -122.2938208
  },
  {
    "name": "Snacks",
    "rating": 4.5,
    "city": "San Mateo",
    "latitude": 37.5683428,
    "longitude": -122.3254578
  },
  {
    "name": "Dessert Republic",
    "rating": 3.5,
    "city": "San Mateo",
    "latitude": 37.5669004,
    "longitude": -122.3234145
  },
  {
    "name": "Mints & Honey",
    "rating": 4.5,
    "city": "San Carlos",
    "latitude": 37.49613,
    "longitude": -122.2477
  },
  {
    "name": "BAMBU",
    "rating": 4.5,
    "city": "Millbrae",
    "latitude": 37.6003797,
    "longitude": -122.3900105
  },
  {
    "name": "ICICLES",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5652199,
    "longitude": -122.3225
  },
  {
    "name": "KingKat Bar & Eatery",
    "rating": 4.5,
    "city": "San Mateo",
    "latitude": 37.54368,
    "longitude": -122.30661
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "Burlingame",
    "latitude": 37.57718759,
    "longitude": -122.348793
  },
  {
    "name": "Antoine's Cookie Shop",
    "rating": 4.5,
    "city": "San Mateo",
    "latitude": 37.5659548,
    "longitude": -122.3233725
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "Foster City",
    "latitude": 37.5447599,
    "longitude": -122.27104
  },
  {
    "name": "Moo Moo Yogurt",
    "rating": 4,
    "city": "Foster City",
    "latitude": 37.54411124,
    "longitude": -122.270671
  },
  {
    "name": "Clear Optometry",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5643,
    "longitude": -122.32361
  },
  {
    "name": "Boiling Point",
    "rating": 3,
    "city": "San Mateo",
    "latitude": 37.56386,
    "longitude": -122.32335
  },
  {
    "name": "CREAM",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5665108,
    "longitude": -122.3237287
  },
  {
    "name": "Poke Island CreAsian Kitchen",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5674055,
    "longitude": -122.3242761
  },
  {
    "name": "Waterfront Cafe",
    "rating": 5,
    "city": "Burlingame",
    "latitude": 37.590323,
    "longitude": -122.34142
  },
  {
    "name": "Never Too Latte",
    "rating": 3.5,
    "city": "San Bruno",
    "latitude": 37.6241,
    "longitude": -122.41095
  },
  {
    "name": "Jougert Bar",
    "rating": 4.5,
    "city": "Burlingame",
    "latitude": 37.5793126,
    "longitude": -122.3457401
  },
  {
    "name": "Mini Coffee",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.56167,
    "longitude": -122.31891
  },
  {
    "name": "Sweet Indulgence",
    "rating": 3,
    "city": "Millbrae",
    "latitude": 37.6007901,
    "longitude": -122.3914315
  },
  {
    "name": "Ramen Dojo",
    "rating": 4,
    "city": "San Mateo",
    "latitude": 37.5621429,
    "longitude": -122.3185051
  },
  {
    "name": "Quickly",
    "rating": 4.5,
    "city": "Millbrae",
    "latitude": 37.60147,
    "longitude": -122.39148
  },
  {
    "name": "Bobo Drinks",
    "rating": 3.5,
    "city": "Fairfield",
    "latitude": 38.26406559,
    "longitude": -122.0502643
  },
  {
    "name": "T4 Tea For U",
    "rating": 3,
    "city": "Fairfield",
    "latitude": 38.27671,
    "longitude": -122.03353
  },
  {
    "name": "Peace Love & Boba",
    "rating": 4,
    "city": "Vacaville",
    "latitude": 38.33538735,
    "longitude": -121.9546299
  },
  {
    "name": "Halo Halo Bar & Boba Station",
    "rating": 4,
    "city": "Suisun City",
    "latitude": 38.24225,
    "longitude": -122.01803
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "Fairfield",
    "latitude": 38.2603729,
    "longitude": -122.0546401
  },
  {
    "name": "Tutti Frutti",
    "rating": 4,
    "city": "Fairfield",
    "latitude": 38.28901029,
    "longitude": -122.0336866
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "Concord",
    "latitude": 37.9761596,
    "longitude": -122.0336363
  },
  {
    "name": "i-Tea",
    "rating": 4,
    "city": "Pittsburg",
    "latitude": 38.01087074,
    "longitude": -121.868887
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "Vallejo",
    "latitude": 38.13408279,
    "longitude": -122.2191544
  },
  {
    "name": "TeaZenTea",
    "rating": 4.5,
    "city": "Brentwood",
    "latitude": 37.93691471,
    "longitude": -121.6981121
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "Vacaville",
    "latitude": 38.3700576,
    "longitude": -121.961772
  },
  {
    "name": "MandRo Teahouse",
    "rating": 4,
    "city": "Davis",
    "latitude": 38.5541889,
    "longitude": -121.7869827
  },
  {
    "name": "Tapioca Express",
    "rating": 3,
    "city": "Vallejo",
    "latitude": 38.1252569,
    "longitude": -122.2552626
  },
  {
    "name": "Okashi Fusion",
    "rating": 4.5,
    "city": "Vacaville",
    "latitude": 38.37033033,
    "longitude": -121.9594813
  },
  {
    "name": "Cafe Tapioca",
    "rating": 4,
    "city": "Hercules",
    "latitude": 38.00996,
    "longitude": -122.270604
  },
  {
    "name": "Pho Saigon No 1 Vietnamese Restaurant",
    "rating": 4,
    "city": "Fairfield",
    "latitude": 38.26504,
    "longitude": -122.03314
  },
  {
    "name": "OnTap",
    "rating": 4,
    "city": "Davis",
    "latitude": 38.5465254,
    "longitude": -121.7607466
  },
  {
    "name": "T4",
    "rating": 4,
    "city": "Antioch",
    "latitude": 37.96592627,
    "longitude": -121.7806713
  },
  {
    "name": "Bobaloca",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.97499032,
    "longitude": -122.0388716
  },
  {
    "name": "Teabo Café",
    "rating": 3.5,
    "city": "Davis",
    "latitude": 38.54076552,
    "longitude": -121.7247179
  },
  {
    "name": "Lazi Cow",
    "rating": 3.5,
    "city": "Davis",
    "latitude": 38.5465,
    "longitude": -121.74006
  },
  {
    "name": "T4",
    "rating": 4,
    "city": "San Pablo",
    "latitude": 37.9547669,
    "longitude": -122.3341669
  },
  {
    "name": "T4 - Concord",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.97763755,
    "longitude": -122.0345775
  },
  {
    "name": "Dragon Snow",
    "rating": 3.5,
    "city": "El Sobrante",
    "latitude": 37.96301,
    "longitude": -122.31987
  },
  {
    "name": "CJ Fusion",
    "rating": 3.5,
    "city": "Fairfield",
    "latitude": 38.25803,
    "longitude": -122.03509
  },
  {
    "name": "Gong Cha",
    "rating": 3.5,
    "city": "Davis",
    "latitude": 38.56200038,
    "longitude": -121.7655839
  },
  {
    "name": "Suisun Seafood Center",
    "rating": 3.5,
    "city": "Suisun City",
    "latitude": 38.24225,
    "longitude": -122.01803
  },
  {
    "name": "TeaOne",
    "rating": 3.5,
    "city": "Davis",
    "latitude": 38.5436287,
    "longitude": -121.7415001
  },
  {
    "name": "Quickly Brentwood",
    "rating": 4.5,
    "city": "Brentwood",
    "latitude": 37.9603144,
    "longitude": -121.7326581
  },
  {
    "name": "T4",
    "rating": 4,
    "city": "Davis",
    "latitude": 38.54306072,
    "longitude": -121.7404981
  },
  {
    "name": "Bangkok Paradise",
    "rating": 4,
    "city": "Fairfield",
    "latitude": 38.29174,
    "longitude": -122.03293
  },
  {
    "name": "Easel",
    "rating": 4.5,
    "city": "Davis",
    "latitude": 38.56032853,
    "longitude": -121.757063
  },
  {
    "name": "Sharetea Davis",
    "rating": 3.5,
    "city": "Davis",
    "latitude": 38.54368611,
    "longitude": -121.7467842
  },
  {
    "name": "The Old Teahouse",
    "rating": 4,
    "city": "Davis",
    "latitude": 38.5465254,
    "longitude": -121.7607466
  },
  {
    "name": "Pho Lee Hoa Phat",
    "rating": 3.5,
    "city": "Fairfield",
    "latitude": 38.25835783,
    "longitude": -122.0208116
  },
  {
    "name": "Skyview Noodle & Tea",
    "rating": 4.5,
    "city": "Pittsburg",
    "latitude": 38.03294011,
    "longitude": -121.8821341
  },
  {
    "name": "Noodle House",
    "rating": 3,
    "city": "Fairfield",
    "latitude": 38.263944,
    "longitude": -122.050281
  },
  {
    "name": "SISIG",
    "rating": 3,
    "city": "Suisun City",
    "latitude": 38.24225,
    "longitude": -122.01803
  },
  {
    "name": "Rrags Caffe",
    "rating": 4.5,
    "city": "Benicia",
    "latitude": 38.05433393,
    "longitude": -122.1526091
  },
  {
    "name": "Yumygurt",
    "rating": 4,
    "city": "Pinole",
    "latitude": 37.99527359,
    "longitude": -122.2853317
  },
  {
    "name": "Vampire Penguin",
    "rating": 3,
    "city": "Brentwood",
    "latitude": 37.946219,
    "longitude": -121.738762
  },
  {
    "name": "Going Green",
    "rating": 4.5,
    "city": "Martinez",
    "latitude": 37.9934616,
    "longitude": -122.1024094
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "Antioch",
    "latitude": 38.00449739,
    "longitude": -121.7999233
  },
  {
    "name": "Pho Lee Hoa Phat",
    "rating": 3.5,
    "city": "Vacaville",
    "latitude": 38.35398865,
    "longitude": -121.9782486
  },
  {
    "name": "Ice Monster",
    "rating": 4,
    "city": "Walnut Creek",
    "latitude": 37.92977951,
    "longitude": -122.0167311
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Walnut Creek",
    "latitude": 37.9174137,
    "longitude": -122.0375497
  },
  {
    "name": "CHALOGY Tea Bar",
    "rating": 3.5,
    "city": "Walnut Creek",
    "latitude": 37.8981,
    "longitude": -122.06206
  },
  {
    "name": "Mr. Green Bubble",
    "rating": 3.5,
    "city": "Walnut Creek",
    "latitude": 37.90006399,
    "longitude": -122.0624954
  },
  {
    "name": "Cool Tea Bar",
    "rating": 4,
    "city": "Danville",
    "latitude": 37.82275384,
    "longitude": -122.0011811
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "Concord",
    "latitude": 37.9787975,
    "longitude": -121.9923601
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "Concord",
    "latitude": 37.97286606,
    "longitude": -122.0437164
  },
  {
    "name": "T4 And Poke",
    "rating": 3.5,
    "city": "Walnut Creek",
    "latitude": 37.89883,
    "longitude": -122.06105
  },
  {
    "name": "i-Tea",
    "rating": 4.5,
    "city": "Moraga",
    "latitude": 37.8353491,
    "longitude": -122.1264706
  },
  {
    "name": "Panache Caffe",
    "rating": 4,
    "city": "Lafayette",
    "latitude": 37.8906068,
    "longitude": -122.1277333
  },
  {
    "name": "Coco Swirl",
    "rating": 4,
    "city": "Pleasant Hill",
    "latitude": 37.94665,
    "longitude": -122.06162
  },
  {
    "name": "Surf City Squeeze",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.9672766,
    "longitude": -122.0621762
  },
  {
    "name": "Hello Pho",
    "rating": 4,
    "city": "Concord",
    "latitude": 37.95516,
    "longitude": -122.04158
  },
  {
    "name": "Harvest House",
    "rating": 4,
    "city": "Concord",
    "latitude": 37.96036,
    "longitude": -122.03578
  },
  {
    "name": "I Love Teriyaki & Sushi",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.97625233,
    "longitude": -122.0372216
  },
  {
    "name": "Cornology",
    "rating": 4.5,
    "city": "Walnut Creek",
    "latitude": 37.8981,
    "longitude": -122.06206
  },
  {
    "name": "Saigon Bistro",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.974103,
    "longitude": -122.041692
  },
  {
    "name": "99 Ranch Market",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.974712,
    "longitude": -122.039859
  },
  {
    "name": "Double Rainbow Cafe",
    "rating": 3.5,
    "city": "Benicia",
    "latitude": 38.04837,
    "longitude": -122.15871
  },
  {
    "name": "Blue Saigon",
    "rating": 4.5,
    "city": "Pittsburg",
    "latitude": 38.0134741,
    "longitude": -121.8905534
  },
  {
    "name": "Jollibee",
    "rating": 3,
    "city": "Concord",
    "latitude": 37.97341,
    "longitude": -122.0557
  },
  {
    "name": "Pho Huynh Hiep 5 - Kevin's Noodle House",
    "rating": 3.5,
    "city": "Concord",
    "latitude": 37.97514,
    "longitude": -122.03901
  },
  {
    "name": "Pho Lee Hoa Phat",
    "rating": 3.5,
    "city": "Pleasant Hill",
    "latitude": 37.980899,
    "longitude": -122.068382
  },
  {
    "name": "Pho Huynh Hiep 6 - Kevin's Noodle House",
    "rating": 4,
    "city": "Walnut Creek",
    "latitude": 37.90798569,
    "longitude": -122.0643005
  },
  {
    "name": "Smitten Ice Cream",
    "rating": 3.5,
    "city": "Lafayette",
    "latitude": 37.8916207,
    "longitude": -122.1198696
  },
  {
    "name": "Aung Maylika",
    "rating": 4.5,
    "city": "Benicia",
    "latitude": 38.06611236,
    "longitude": -122.1654914
  },
  {
    "name": "IzzyA's Frozen Custard",
    "rating": 4.5,
    "city": "Lafayette",
    "latitude": 37.89301,
    "longitude": -122.12063
  },
  {
    "name": "Yogurtland",
    "rating": 4,
    "city": "Pleasant Hill",
    "latitude": 37.94483343,
    "longitude": -122.0561197
  },
  {
    "name": "Golden Bakery",
    "rating": 5,
    "city": "Pittsburg",
    "latitude": 38.0136496,
    "longitude": -121.8904874
  },
  {
    "name": "Tutti Frutti Montclair",
    "rating": 4,
    "city": "Oakland",
    "latitude": 37.8261642,
    "longitude": -122.2092056
  },
  {
    "name": "Tangelo Frozen Yogurt",
    "rating": 4.5,
    "city": "Moraga",
    "latitude": 37.86002748,
    "longitude": -122.1256032
  },
  {
    "name": "Surf City Squeeze",
    "rating": 3.5,
    "city": "Antioch",
    "latitude": 38.0000664,
    "longitude": -121.8419518
  },
  {
    "name": "LV Vietnamese Pho and Sandwiches",
    "rating": 4,
    "city": "Vallejo",
    "latitude": 38.10548401,
    "longitude": -122.2077103
  },
  {
    "name": "Korea House",
    "rating": 4,
    "city": "Concord",
    "latitude": 37.97514,
    "longitude": -122.03874
  },
  {
    "name": "Yo Sushi",
    "rating": 3.5,
    "city": "Martinez",
    "latitude": 37.9969242,
    "longitude": -122.1078972
  },
  {
    "name": "Lulu's Kitchen",
    "rating": 4,
    "city": "Concord",
    "latitude": 37.97287623,
    "longitude": -122.0437812
  },
  {
    "name": "Pho Hoa An",
    "rating": 3,
    "city": "Pleasant Hill",
    "latitude": 37.95448065,
    "longitude": -122.0602968
  },
  {
    "name": "Saigon Bistro Restaurant",
    "rating": 3.5,
    "city": "Pittsburg",
    "latitude": 38.00681479,
    "longitude": -121.8415315
  },
  {
    "name": "Pho Lee Hoa Phat",
    "rating": 3.5,
    "city": "Pittsburg",
    "latitude": 38.01147789,
    "longitude": -121.8897191
  },
  {
    "name": "Viet Nam Noodle House",
    "rating": 4,
    "city": "Antioch",
    "latitude": 38.00407809,
    "longitude": -121.8442871
  },
  {
    "name": "Little Hearty Noodle",
    "rating": 3.5,
    "city": "Moraga",
    "latitude": 37.8578085,
    "longitude": -122.1258359
  },
  {
    "name": "Bubble Loca",
    "rating": 3.5,
    "city": "Richmond",
    "latitude": 37.8988113,
    "longitude": -122.3075638
  },
  {
    "name": "Ten Ren Tea Co",
    "rating": 4,
    "city": "Richmond",
    "latitude": 37.89875431,
    "longitude": -122.3074585
  },
  {
    "name": "Tala Coffee & Tea",
    "rating": 3.5,
    "city": "El Cerrito",
    "latitude": 37.91313793,
    "longitude": -122.309712
  },
  {
    "name": "Sharetea",
    "rating": 3.5,
    "city": "San Rafael",
    "latitude": 37.97170579,
    "longitude": -122.5187601
  },
  {
    "name": "TPartea Boba Drinks And Banh Mi",
    "rating": 3.5,
    "city": "San Rafael",
    "latitude": 38.00394927,
    "longitude": -122.5438845
  },
  {
    "name": "Sunny Day Sweet House",
    "rating": 3.5,
    "city": "Richmond",
    "latitude": 37.89881,
    "longitude": -122.30756
  },
  {
    "name": "Aloha Pure Water Shaved Ice",
    "rating": 4.5,
    "city": "San Pablo",
    "latitude": 37.966045,
    "longitude": -122.343246
  },
  {
    "name": "World Wrapps",
    "rating": 4.5,
    "city": "Corte Madera",
    "latitude": 37.92833783,
    "longitude": -122.518048
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "El Cerrito",
    "latitude": 37.90120822,
    "longitude": -122.2996008
  },
  {
    "name": "Tay Tah Cafe",
    "rating": 3.5,
    "city": "Albany",
    "latitude": 37.89023,
    "longitude": -122.29626
  },
  {
    "name": "Sweetheart Cafe",
    "rating": 3.5,
    "city": "Berkeley",
    "latitude": 37.8680525,
    "longitude": -122.258168
  },
  {
    "name": "TeaOne Berkeley",
    "rating": 3.5,
    "city": "Berkeley",
    "latitude": 37.86727,
    "longitude": -122.25905
  },
  {
    "name": "Quickly - Kobe Bento",
    "rating": 2,
    "city": "Richmond",
    "latitude": 37.898898,
    "longitude": -122.307341
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "San Rafael",
    "latitude": 37.9733537,
    "longitude": -122.528938
  },
  {
    "name": "Sivan's Cafe",
    "rating": 4.5,
    "city": "Hayward",
    "latitude": 37.67244,
    "longitude": -122.08685
  },
  {
    "name": "Honey Bear Smoothie Tea & Dessert",
    "rating": 5,
    "city": "Hayward",
    "latitude": 37.6542332,
    "longitude": -122.1048419
  },
  {
    "name": "Sharetea",
    "rating": 4,
    "city": "San Ramon",
    "latitude": 37.77474213,
    "longitude": -121.977684
  },
  {
    "name": "T4",
    "rating": 3.5,
    "city": "Castro Valley",
    "latitude": 37.70864,
    "longitude": -122.09134
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "Hayward",
    "latitude": 37.64435502,
    "longitude": -122.1046306
  },
  {
    "name": "8-Twelve Oriental Market",
    "rating": 4,
    "city": "San Leandro",
    "latitude": 37.7310477,
    "longitude": -122.1605656
  },
  {
    "name": "Polaris Ice Cream Rolls",
    "rating": 4,
    "city": "Hayward",
    "latitude": 37.65254837,
    "longitude": -122.1064539
  },
  {
    "name": "Milkcow",
    "rating": 3.5,
    "city": "Castro Valley",
    "latitude": 37.69529,
    "longitude": -122.07956
  },
  {
    "name": "Satori Tea Company",
    "rating": 3.5,
    "city": "Saratoga",
    "latitude": 37.2574696,
    "longitude": -122.0335427
  },
  {
    "name": "Creative Sips",
    "rating": 4,
    "city": "San Jose",
    "latitude": 37.31369781,
    "longitude": -121.9466248
  },
  {
    "name": "Saratoga Bagels",
    "rating": 4.5,
    "city": "Saratoga",
    "latitude": 37.28203794,
    "longitude": -122.0319166
  },
  {
    "name": "Snowflake",
    "rating": 3.5,
    "city": "San Jose",
    "latitude": 37.31559812,
    "longitude": -121.9772822
  },
  {
    "name": "Steepers",
    "rating": 4.5,
    "city": "Campbell",
    "latitude": 37.28691,
    "longitude": -121.94397
  },
  {
    "name": "YoDo Yogurt",
    "rating": 3.5,
    "city": "Campbell",
    "latitude": 37.2784787,
    "longitude": -121.9497792
  },
  {
    "name": "Caffé Central",
    "rating": 2.5,
    "city": "Santa Clara",
    "latitude": 37.3260983,
    "longitude": -121.9441444
  },
  {
    "name": "Bar Code",
    "rating": 3,
    "city": "Santa Clara",
    "latitude": 37.32609834,
    "longitude": -121.945619
  },
  {
    "name": "Jovie Coffee & Pho",
    "rating": 3.5,
    "city": "Campbell",
    "latitude": 37.28781944,
    "longitude": -121.9752119
  },
  {
    "name": "Tous Les Jours",
    "rating": 3.5,
    "city": "Santa Clara",
    "latitude": 37.33882,
    "longitude": -121.99497
  },
  {
    "name": "Menchie's Frozen Yogurt",
    "rating": 4.5,
    "city": "Vallejo",
    "latitude": 38.133641,
    "longitude": -122.222464
  },
  {
    "name": "Starbread Bakery",
    "rating": 4.5,
    "city": "Vallejo",
    "latitude": 38.12531328,
    "longitude": -122.2541592
  },
  {
    "name": "Pho #1",
    "rating": 4,
    "city": "Vallejo",
    "latitude": 38.12666702,
    "longitude": -122.2561264
  },
  {
    "name": "Sunshine Bakery",
    "rating": 3,
    "city": "Vallejo",
    "latitude": 38.12214661,
    "longitude": -122.2545013
  },
  {
    "name": "Original Red Onion",
    "rating": 3,
    "city": "Vallejo",
    "latitude": 38.10589,
    "longitude": -122.22709
  },
  {
    "name": "Yo Sushi",
    "rating": 3.5,
    "city": "Vallejo",
    "latitude": 38.08376513,
    "longitude": -122.2116666
  },
  {
    "name": "Midori Japanese Cuisine",
    "rating": 3.5,
    "city": "Vallejo",
    "latitude": 38.12143971,
    "longitude": -122.2547269
  },
  {
    "name": "Pho Lee Hoa Phat",
    "rating": 3,
    "city": "Vallejo",
    "latitude": 38.10499,
    "longitude": -122.21532
  },
  {
    "name": "Pho Saigon Village Noodle House",
    "rating": 4.5,
    "city": "Vallejo",
    "latitude": 38.12384966,
    "longitude": -122.253961
  },
  {
    "name": "Pho Lee Hoa Phat 2",
    "rating": 3,
    "city": "Vallejo",
    "latitude": 38.1224127,
    "longitude": -122.2586215
  },
  {
    "name": "Chowking",
    "rating": 3,
    "city": "Vallejo",
    "latitude": 38.121818,
    "longitude": -122.2554405
  },
  {
    "name": "Tacos Jalisco",
    "rating": 4,
    "city": "Vallejo",
    "latitude": 38.12118912,
    "longitude": -122.2546005
  },
  {
    "name": "Menchie's Frozen Yogurt",
    "rating": 4,
    "city": "Belmont",
    "latitude": 37.5189045,
    "longitude": -122.2744648
  },
  {
    "name": "Fashion Wok",
    "rating": 4,
    "city": "Foster City",
    "latitude": 37.54528365,
    "longitude": -122.270465
  },
  {
    "name": "Pho New Saigon",
    "rating": 3.5,
    "city": "Foster City",
    "latitude": 37.5532937,
    "longitude": -122.2565492
  },
  {
    "name": "Hongry Kong",
    "rating": 3.5,
    "city": "Belmont",
    "latitude": 37.52403259,
    "longitude": -122.2790756
  },
  {
    "name": "Marina Food",
    "rating": 3,
    "city": "San Mateo",
    "latitude": 37.54441185,
    "longitude": -122.2847967
  },
  {
    "name": "Cooking Papa Restaurant",
    "rating": 3.5,
    "city": "Foster City",
    "latitude": 37.54461312,
    "longitude": -122.2704258
  },
  {
    "name": "Sheng Kee Bakery",
    "rating": 3,
    "city": "San Mateo",
    "latitude": 37.5452652,
    "longitude": -122.2844771
  },
  {
    "name": "Eat On Monday",
    "rating": 4.5,
    "city": "Mountain View",
    "latitude": 37.3931694,
    "longitude": -122.0855179
  },
  {
    "name": "Pho Little Saigon",
    "rating": 3,
    "city": "San Mateo",
    "latitude": 37.54458858,
    "longitude": -122.2849688
  },
  {
    "name": "Myung Dong Tofu Cabin",
    "rating": 3.5,
    "city": "San Mateo",
    "latitude": 37.54478418,
    "longitude": -122.2849461
  },
  {
    "name": "Bagel Street Cafe",
    "rating": 3,
    "city": "Redwood City",
    "latitude": 37.52246683,
    "longitude": -122.2516251
  },
  {
    "name": "East 14th Bakery & Cafe",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.7215444,
    "longitude": -122.1509912
  },
  {
    "name": "Tapioca Express",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.7239999,
    "longitude": -122.15511
  },
  {
    "name": "Quickly",
    "rating": 2.5,
    "city": "San Leandro",
    "latitude": 37.69783401,
    "longitude": -122.1303558
  },
  {
    "name": "Sweethoney Dessert",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.72408454,
    "longitude": -122.1548124
  },
  {
    "name": "Hanoi Chicken Noodle",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.69982,
    "longitude": -122.17564
  },
  {
    "name": "Loving Tea",
    "rating": 2,
    "city": "San Leandro",
    "latitude": 37.7026172,
    "longitude": -122.1272393
  },
  {
    "name": "Cafe Sorriso",
    "rating": 4,
    "city": "San Leandro",
    "latitude": 37.7228,
    "longitude": -122.155194
  },
  {
    "name": "D T Dim Sum & Tea",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.6799807,
    "longitude": -122.154671
  },
  {
    "name": "Milk & Cookie Bar",
    "rating": 4.5,
    "city": "Castro Valley",
    "latitude": 37.70864,
    "longitude": -122.09134
  },
  {
    "name": "Sweet Dee Cupcakes & Snow Ice",
    "rating": 4,
    "city": "San Leandro",
    "latitude": 37.72294498,
    "longitude": -122.1535432
  },
  {
    "name": "Quickly",
    "rating": 3.5,
    "city": "San Lorenzo",
    "latitude": 37.672989,
    "longitude": -122.1221398
  },
  {
    "name": "Tapioca Express",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.76273,
    "longitude": -122.24497
  },
  {
    "name": "Leisure Cafe",
    "rating": 2.5,
    "city": "San Leandro",
    "latitude": 37.72365835,
    "longitude": -122.1545305
  },
  {
    "name": "Quickly",
    "rating": 3,
    "city": "Castro Valley",
    "latitude": 37.69477911,
    "longitude": -122.0739795
  },
  {
    "name": "China Kitchen Express",
    "rating": 2,
    "city": "San Leandro",
    "latitude": 37.7154007,
    "longitude": -122.1423264
  },
  {
    "name": "Pho An Hoa",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.702842,
    "longitude": -122.142028
  },
  {
    "name": "Tuttimelon",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.76394,
    "longitude": -122.24266
  },
  {
    "name": "Banh Mi Ba Le",
    "rating": 4.5,
    "city": "Oakland",
    "latitude": 37.78606,
    "longitude": -122.24101
  },
  {
    "name": "Pokeatery",
    "rating": 4.5,
    "city": "Castro Valley",
    "latitude": 37.70864,
    "longitude": -122.09134
  },
  {
    "name": "Hot Spot",
    "rating": 3.5,
    "city": "Alameda",
    "latitude": 37.76570347,
    "longitude": -122.2423786
  },
  {
    "name": "World's Fare Donuts",
    "rating": 4.5,
    "city": "Hayward",
    "latitude": 37.66518826,
    "longitude": -122.1164806
  },
  {
    "name": "Taqueria Los Pericos",
    "rating": 4,
    "city": "San Leandro",
    "latitude": 37.72437,
    "longitude": -122.155085
  },
  {
    "name": "Pho Anh-Ha",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.71929,
    "longitude": -122.14865
  },
  {
    "name": "Craw Station",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.69066472,
    "longitude": -122.151571
  },
  {
    "name": "R & D Cafe",
    "rating": 4,
    "city": "San Lorenzo",
    "latitude": 37.67703148,
    "longitude": -122.1425618
  },
  {
    "name": "Munch",
    "rating": 4,
    "city": "Hayward",
    "latitude": 37.631869,
    "longitude": -122.075384
  },
  {
    "name": "Foodnet Supermarket",
    "rating": 3.5,
    "city": "San Leandro",
    "latitude": 37.6795,
    "longitude": -122.15479
  },
  {
    "name": "Yo Bowl",
    "rating": 4,
    "city": "Hayward",
    "latitude": 37.651128,
    "longitude": -122.101296
  },
  {
    "name": "Yogurt Hill",
    "rating": 4,
    "city": "Hayward",
    "latitude": 37.67355,
    "longitude": -122.08114
  },
  {
    "name": "Alohana Hawaiian Grill",
    "rating": 3,
    "city": "San Leandro",
    "latitude": 37.700116,
    "longitude": -122.126858
  }

]
places.forEach(function (location) {
         console.log(location)
        L.marker([location.latitude, location.longitude], {icon: bobaIcon}).addTo(myMap);
})

// L.marker([37.56295,	-122.01004], {icon: bobaIcon}).addTo(myMap);

//char icon
  //var chartIcon = L.icon({
  //iconUrl: 'charticon.png',
  //shadowUrl: 'Boba.png',

  //iconSize:     [60, 60], // size of the icon 38,95
  //shadowSize:   [50, 64], // size of the shadow
  //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//});


    // create popup contents
    //var customPopup = "East Asian Population in California<br/><img src='PieChart_population.png' width='350px'/>";;

    // specify popup options
    //var customOptions =
        //{
        //'maxWidth': '500',
        //'className' : 'custom'
        //}

    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    //L.marker([35.562965, -126.042835], {icon: chartIcon}).bindPopup(customPopup,customOptions).addTo(myMap);
///
