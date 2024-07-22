
function cargarDatos() {
    let peticion = new XMLHttpRequest();
  
    peticion.open('get', 'https://localhost:44324/api/ambulancia', true);
  
  
    peticion.addEventListener('load', () => {
      console.log(peticion.readyState)
  
      if (peticion.status === 200) {
        var respuesta = JSON.parse(peticion.response);
        mostrarDatos(respuesta);
      }
    });
  
    peticion.send();
}

  
  function mostrarDatos(datos) {
    var tbody = document.querySelector('#tabla-datos tbody');
    tbody.innerHTML = ''; 
  
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





