var map = L.map('map').setView([-35.81, -61.89], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
  let marker = L.marker(coords).addTo(map);
  let arrayText = document.getElementById('select-location').options[document.getElementById('select-location').selectedIndex].text;
  marker.bindPopup(arrayText).openPopup;
});

document.getElementById('btnResetMap').addEventListener('click', function(){
  map.setView([-35.81, -61.89], 14);
});

map.scrollWheelZoom.disable();
