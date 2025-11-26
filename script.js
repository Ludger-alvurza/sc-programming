// Visitor Counter
function init() {
  const counterElement = document.getElementById("visitorCount");
  let visitorCount = localStorage.getItem("visitorCount");
  if (visitorCount === null) {
    visitorCount = 0;
  } else {
    visitorCount = parseInt(visitorCount);
  }
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);
  counterElement.textContent = visitorCount;
  console.log("Visitor count updated to:", visitorCount);
}
window.addEventListener("load", init);

function initMap() {
  const latitude = -7.774726;
  const longitude = 110.449774;
  const zoomLevel = 13;

  // Buat map
  const map = L.map("map").setView([latitude, longitude], zoomLevel);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("<b>Ukrim,kalasan, Yogyakarta</b><br>Indonesia")
    .openPopup();
}

// Jalankan map setelah Leaflet library loaded
window.addEventListener("load", initMap);
