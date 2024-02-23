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

