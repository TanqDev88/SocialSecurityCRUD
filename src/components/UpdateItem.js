import React, { useState } from 'react';
import axios from 'axios';

const UpdateItem = ({ itemId, handleUpdateSuccess }) => {
  const [updatedItem, setUpdatedItem] = useState({
    empresa: '',
    codigo: '',
    obraSocial: '',
    afiliado: '',
    dni: 0,
    precio: 0
  });

  const handleInputChange = (e) => {
    setUpdatedItem({
      ...updatedItem,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la solicitud PUT al servidor para actualizar el elemento
      await axios.put(
        `https://localhost:44324/api/ambulancia/${itemId}`,
        updatedItem
      );
      // Llamar a la función de éxito de actualización proporcionada por el componente padre
      handleUpdateSuccess();
      // Limpiar el formulario
      setUpdatedItem({
        id: 0,
        empresa: '',
        codigo: '',
        obraSocial: '',
        afiliado: '',
        dni: 0,
        precio: 0
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='text-red-500'>
      <h1 className="mt-5 ">Editar item</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Id:
          <input
            type="number"
            name="id"
            value={parseInt(updatedItem.id, 10)}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />
        <label>
          Empresa:
          <input
            type="text"
            name="empresa"
            value={updatedItem.empresa}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />

        <label>
          Código:
          <input
            type="text"
            name="codigo"
            value={updatedItem.codigo}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />

        <label>
          Obra Social:
          <input
            type="text"
            name="obraSocial"
            value={updatedItem.obraSocial}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />

        <label>
          Afiliado:
          <input
            type="text"
            name="afiliado"
            value={updatedItem.afiliado}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />

        <label>
          DNI:
          <input
            type="text"
            name="dni"
            value={parseInt(updatedItem.dni, 10)}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />

        <label>
          Precio:
          <input
            type="text"
            name="precio"
            value={parseInt(updatedItem.precio, 10)}
            onChange={handleInputChange}
            className="m-2 focus:outline-none"
          />
        </label>
        <br />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
