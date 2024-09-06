import React, { useState } from 'react';
import axios from 'axios';

const Administrador = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleDownloadCSV = async () => {
    try {
      const response = await axios.get('https://server-amigos.onrender.com/descargar-csv', {
        responseType: 'blob', // Para que el navegador lo interprete como archivo
      });
  
      // Crea un enlace para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'compras.csv'); // Nombre del archivo
      document.body.appendChild(link);
      link.click();
  
      // Limpia el enlace después de descargar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  
    } catch (error) {
      console.error('Error al descargar CSV:', error);
      alert('Error al descargar CSV');
    }
  };

  return (
    <div className="p-6  mt-8 items-center flex flex-col text-white font-sans">
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
          className="ml-2 mt-4 p-2 bg-blue-500 text-white rounded"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
        <button
          onClick={handleDownloadCSV}
          className="ml-2 mt-4 p-2 bg-green-500 text-white rounded"
        >
          Descargar CSV
        </button>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className='w-full'>
          {results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((result, index) => (
                <li key={index} className="border p-4 rounded">
                  <p><strong>Usuario:</strong> {result.usuario}</p>
                  <p><strong>Email:</strong> {result.email}</p>
                  <p><strong>Contacto:</strong> {result.contacto}</p>
                  <p><strong>Nombre:</strong> {result.nombre}</p>
                  <img
                    src={result.imageUrl}
                    alt="Imagen de compra"
                    className="mt-2 w-48 h-48 object-cover"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Administrador;
