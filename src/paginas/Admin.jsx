import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dije from "../store";

const Administrador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState({});
  const [first, setFirst] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ usuario: '', contraseña: '' });

  useEffect(() => {
    if (first) {
      Dije.readyVideo = true;
    }
  }, [first]);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://server-amigos.onrender.com/buscar`, {
        params: { term: searchTerm },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error al buscar en la base de datos:', error);
      alert('Error al buscar datos');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    console.log('loginData:', loginData);  // Verificar los datos enviados
    try {
      const response = await axios.post(
        'https://server-amigos.onrender.com/verificar-usuario',
        JSON.stringify(loginData),  // Asegúrate de que los datos estén en formato JSON
        {
          headers: {
            'Content-Type': 'application/json',  // Especificar el tipo de contenido
          }
        }
      );
      console.log('Response:', response.data);  // Verificar la respuesta
      if (response.data.access) {
        setLoggedIn(true);
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error.response ? error.response.data : error.message);
      alert('Error al verificar el usuario');
    }
  };
  
  const handleDownloadCSV = async () => {
    try {
      const response = await axios.get('https://server-amigos.onrender.com/descargar-csv', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'compras.csv');
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error('Error al descargar CSV:', error);
      alert('Error al descargar CSV');
    }
  };

  const handleAddOrderNumber = async (docId) => {
    try {
      const orderNum = orderNumber[docId] || '';
      if (!orderNum) {
        alert('Por favor, ingrese un número de orden');
        return;
      }

      await axios.post('https://server-amigos.onrender.com/agregar-numero-orden', {
        docId,
        orderNum
      });

      alert('Número de orden agregado exitosamente');
    } catch (error) {
      console.error('Error al agregar el número de orden:', error);
      alert('Error al agregar el número de orden');
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setResults([]);
  };

  if (!loggedIn) {
    return (
      <div className="p-6 mt-8 items-center flex flex-col text-white font-sans">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={loginData.usuario}
            onChange={(e) => setLoginData({ ...loginData, usuario: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={loginData.contraseña}
            onChange={(e) => setLoginData({ ...loginData, contraseña: e.target.value })}
            className="p-2 border border-gray-300 rounded mt-2"
          />
          <button
            onClick={handleLogin}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 mt-8 items-center flex flex-col text-white font-sans">
      <h1 className="text-2xl font-bold mb-4">Administrador de Compras</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 mt-4 p-2 w-32 bg-blue-500 text-white rounded"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
        <button
          onClick={handleDownloadCSV}
          className="ml-2 mt-4 p-2 bg-green-500 text-white rounded"
        >
          Descargar CSV
        </button>
        <button
          onClick={handleClearSearch}
          className="ml-2 mt-4 p-2 bg-emerald-500 text-white rounded"
        >
          Limpiar búsqueda
        </button>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className='w-full'>
          {results.length > 0 ? (
            <ul className="space-y-4 flex flex-col items-center">
              {results.map((result, index) => (
                <li key={index} className="border p-4 rounded w-1/2">
                  <p><strong>Usuario:</strong> {result.usuario}</p>
                  <p><strong>Email:</strong> {result.email}</p>
                  <p><strong>Contacto:</strong> {result.contacto}</p>
                  <p><strong>Nombre:</strong> {result.nombre}</p>
                  <p><strong>Orden:</strong> {result.numeroOrden}</p>
                  <img
                    src={result.imageUrl}
                    alt="Imagen de compra"
                    className="mt-2 w-48 h-48 object-cover"
                  />
                  <div className="mt-4 flex items-center">
                    <input
                      type="text"
                      placeholder="Número de orden"
                      value={orderNumber[result.docId] || ''}
                      onChange={(e) => setOrderNumber({ ...orderNumber, [result.docId]: e.target.value })}
                      className="p-2 border w-[50%] border-gray-300 rounded mr-2"
                    />
                    <button
                      onClick={() => handleAddOrderNumber(result.docId)}
                      className="p-2 bg-yellow-500 text-white rounded"
                    >
                      Añadir Número de Orden
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Administrador;
