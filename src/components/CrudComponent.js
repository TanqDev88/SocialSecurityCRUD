import { useState } from "react";
import axios from 'axios';
import { CreateItem } from "./CreateItem";
import UpdateItem from "./UpdateItem";

const CrudComponent = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    empresa: "",
    codigo: "",
    obraSocial: "",
    afiliado: "",
    dni: 0,
    precio: 0
  });

  // función que llama a la API: 
  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:44324/api/ambulancia');
      return response.data;
      
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  // función getAll: 
  const getAll = async () => {
    const data = await fetchData();
   
    setItems(data);  
  }

  // función POST ---------------------
  
  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Actualizar la lista de items después de crear uno nuevo
      await getAll();
      // Limpiar el formulario
      setNewItem({
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

  // FUNCION DELETE ------------

  const deleteItem = async (itemId) => {
    try {
      // Realizar la solicitud DELETE al servidor
      await axios.delete(`https://localhost:44324/api/ambulancia/${itemId}`);
      // Volver a cargar los datos después de eliminar
      await getAll();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <h1 className="mt-5">CRUD Component</h1>

      <button onClick={getAll} className="bg-blue-500 hover:bg-blue-700 font-bold py-1 px-2 my-5 mb-10 rounded">
        Cargar datos
      </button>

        <div className="flex flex-wrap gap-4">
            {items.map(item => (
                <div key={item.id} className="bg-gray-600 p-4 rounded">
                    <p className="font-bold">Empresa: {item.empresa}</p>
                    <p>Código: {item.codigo}</p>
                    <p>Obra Social: {item.obraSocial}</p>
                    <p>Afiliado: {item.afiliado}</p>
                    <p>DNI: {item.dni}</p>
                    <p>Precio: {item.precio}</p>

                <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                    Eliminar
                </button>
                </div>
                
            ))}
           
        </div>

        <CreateItem
            newItem={newItem}
            handleInputChange={handleInputChange}
            handleSubmit={(e) => handleSubmit(e, newItem)} // Pasa el nuevo item como parámetro
        />

        <UpdateItem />

     
    </div>
  );
};

export default CrudComponent;
