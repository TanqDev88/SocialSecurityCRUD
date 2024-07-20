import React from 'react';
import axios from 'axios';


export const CreateItem = ({ newItem, handleInputChange }) => {

    const handleSubmitForm = async (e) => {
        e.preventDefault();
    
        try {
          // Realizar la solicitud POST al servidor
          await axios.post('https://localhost:44324/api/ambulancia', newItem);
          // Limpiar el formulario
          handleInputChange({
            target: { name: 'empresa', value: '' }
          });
          handleInputChange({
            target: { name: 'codigo', value: '' }
          });
          handleInputChange({
            target: { name: 'obraSocial', value: '' }
          });
          handleInputChange({
            target: { name: 'afiliado', value: '' }
          });
          handleInputChange({
            target: { name: 'dni', value: 0 }
          });
          handleInputChange({
            target: { name: 'precio', value: 0 }
          });
        } catch (error) {
          console.error(error);
        }
      };
    

  return (
    <div className='text-blue-600'>
        <h2 className="mt-5">Crear nuevo item</h2>
        <form onSubmit={handleSubmitForm}>
            <label>
                Empresa:
            <input type="text" name="empresa" value={newItem.empresa} onChange={handleInputChange} className="m-2 focus:outline-none"/>
            </label>
            <br/>

            <label>
                Código:
            <input type="text" name="codigo" value={newItem.codigo} onChange={handleInputChange} className="m-2 focus:outline-none"/>
            </label>
            <br />

            <label>
                Obra Social:
            <input type="text" name="obraSocial" value={newItem.obraSocial} onChange={handleInputChange} className="m-2 focus:outline-none" />
            </label>
            <br />

            <label>
                Afiliado:
            <input type="text" name="afiliado" value={newItem.afiliado} onChange={handleInputChange}className="m-2 focus:outline-none" />
            </label>
            <br />

            <label>
                DNI:
            <input type="text" name="dni" value={parseInt(newItem.dni, 10)} onChange={handleInputChange} className="m-2 focus:outline-none"/>
            </label>
            <br />

            <label>
                Precio:
            <input type="text" name="precio" value={parseInt(newItem.precio, 10)} onChange={handleInputChange} className="m-2 focus:outline-none" />
            </label>
            <br />

            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                Crear
            </button>
        </form>

    </div>

  )
}
