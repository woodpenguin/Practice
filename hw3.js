  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.23944492814033, lng: -118.52767983853644 },
    zoom: 16,
    draggable: false,
    navigationControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
  
  });
}

window.initMap = initMap;