document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([-8.65, 117.283333], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([-8.65, 117.283333])
    .addTo(map)
    .bindPopup('Provinsi Nusa Tenggara Barat')
    .openPopup();
});
