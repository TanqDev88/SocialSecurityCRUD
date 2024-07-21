
function cargarDatos() {
    let peticion = new XMLHttpRequest();
  
    // Config
    peticion.open('get', 'https://localhost:44324/api/ambulancia', true);
  
    // Estados 2, 3, 4
  
    peticion.addEventListener('load', () => {
      console.log(peticion.readyState)
  
      if (peticion.status === 200) {
        var respuesta = JSON.parse(peticion.response);
        mostrarDatos(respuesta);
      }
    });
  
    peticion.send();
}

  // funcion Cargar datos -------------------------------------------------
  
  function mostrarDatos(datos) {
    var tbody = document.querySelector('#tabla-datos tbody');
    tbody.innerHTML = ''; // Limpiar el contenido existente
  
    datos.forEach(function (dato) {
      var fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${dato.id}</td>
        <td>${dato.empresa}</td>
        <td>${dato.codigo}</td>
        <td>${dato.obraSocial}</td>
        <td>${dato.afiliado}</td>
        <td>${dato.dni}</td>
        <td>${dato.precio}</td>
      `;
      tbody.appendChild(fila);
    });
  
    document.getElementById('btn-cargar') 
  }


/* peticion.addEventListener('readystatechange', () => {
    console.log(peticion.readyState)
    if(peticion.readyState == 4){
        console.log(peticion.response);
    }
}) */


