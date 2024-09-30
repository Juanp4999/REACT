import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PropTypes from 'prop-types';
import './App.css';

// Componente Contenedor que envuelve el contenido en un div con borde
function Contenedor(props) {
  const estiloContenedor = {
    border: '2px solid #3399ff', // borde alrededor del contenido
    padding: '20px',
    borderRadius: '100px',
    margin: '20px 0'
  };

  return <div style={estiloContenedor}>{props.children}</div>;
}

// Validación de props del Contenedor
Contenedor.propTypes = {
  children: PropTypes.node.isRequired, // Asegúrate de que children sean un nodo válido de React y es requerido
};

// Componente Saludo
function Saludo(props) {
  // Definir un saludo basado en el idioma
  const saludos = {
    español: `Hola, ${props.nombre}. Bienvenido!`,
    inglés: `Hello, ${props.nombre}. Welcome!`,
    francés: `Bonjour, ${props.nombre}. Bienvenue!`,
  };

  // Obtener el saludo correspondiente o un saludo por defecto
  const mensaje = saludos[props.idioma];

  return <h1>{mensaje}</h1>;
}

// Validación de props del Saludo
Saludo.propTypes = {
  nombre: PropTypes.string.isRequired, // Asegúrate de que nombre sea requerido y de tipo string
  idioma: PropTypes.string, // Asegúrate de que idioma sea un string
};

function App() {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState(''); // Estado para el nombre 
  const [idioma, setIdioma] = useState('español'); // Estado para el idioma

  // manejar el saludo
  const manejarSaludo = () => {
    const nombreUsuario = prompt('Por favor, ingresa tu nombre:');
    
    if (nombreUsuario) {
      setNombre(nombreUsuario);
    }
  };

  //establecer el idioma
  const seleccionarIdioma = (idiomaSeleccionado) => {
    setIdioma(idiomaSeleccionado);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Botón para activar el prompt y establecer el nombre */}
      <button onClick={manejarSaludo}>Ingresa tu nombre</button> 

      {/* Si el nombre está definido, renderiza el componente Saludo */}
      {nombre && (
        <Contenedor>
          <Saludo nombre={nombre} idioma={idioma} />
          <div>
            <button onClick={() => seleccionarIdioma('español')}>Español</button>
            <button onClick={() => seleccionarIdioma('inglés')}>Inglés</button>
            <button onClick={() => seleccionarIdioma('francés')}>Francés</button>
          </div>
        </Contenedor>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
