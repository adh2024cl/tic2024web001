function mostrarCreditos() {

  alert("Autor:Álvaro Díaz Huelga Nº5 2BACH ºC");

}



function ocultarSeccion() {

  var seccion = document.querySelector('.bloque1');

  seccion.style.display = (seccion.style.display === 'none'|| seccion.style.display === '') ? 'block' : 'none';

}



function MostrarSeccion() {

  var seccion = document.querySelector('.bloque1');

  seccion.style.display = (seccion.style.display === 'none' || seccion.style.display === '') ? 'block' : 'none';

}



function cambiarColorFondo() {

  var seccion = document.querySelector('.bloque1');

  seccion.style.backgroundColor = 'blue'; 

}



function mostrarFecha() {

  var fechaActual = new Date();

  alert('Fecha actual: ' + fechaActual);

}



function cambiarColorFondoHover() {

  var seccion = document.querySelector('.bloque2');

  seccion.style.backgroundColor = 'green';

}



function restaurarColorFondo() {

  var seccion = document.querySelector('.bloque2');

  seccion.style.backgroundColor = 'lightgrey';

}



function obtenerUbicacion() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      var ubicacionDiv = document.getElementById("ubicacion");

      ubicacionDiv.innerHTML = "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;

      // Llamar a la función para mostrar el mapa

      mostrarMapa(position.coords.latitude, position.coords.longitude);

    });

  } else {

    ubicacionDiv.innerHTML = "Geolocalización no es soportada por tu navegador.";

  }

}



// Nueva función para mostrar el mapa

function mostrarMapa(latitud, longitud) {

  var mapa = L.map('mapa').setView([latitud, longitud], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom: 18,

    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +

      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

    id: 'mapbox/streets-v11',

    tileSize: 512,

    zoomOffset: -1

  }).addTo(mapa);

  L.marker([latitud, longitud]).addTo(mapa)

    .bindPopup('Tu ubicación.')

    .openPopup();

}
