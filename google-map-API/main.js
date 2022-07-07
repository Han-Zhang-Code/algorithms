/* global google */
// eslint-disable-next-line no-unused-vars
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

window.initMap = initMap;
