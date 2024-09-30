import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import PropTypes from 'prop-types';
import './App.css';

// Componente Contenedor 
function Contenedor(props) {
  const estiloContenedor = {
    border: '2px solid #3399ff', 
    padding: '20px',
    borderRadius: '100px',
    margin: '20px 0'
  };

  return <div style={estiloContenedor}>{props.children}</div>;
}

// Validación de props del Container
Contenedor.propTypes = {
  children: PropTypes.node.isRequired, // Asegúrate de que children sean un nodo válido de React y es requerido
};

// Componente Saludo
function Saludo(props) {
  const saludos = {
    español: `Hola, ${props.nombre}. Bienvenido!`,
    inglés: `Hello, ${props.nombre}. Welcome!`,
    francés: `Bonjour, ${props.nombre}. Bienvenue!`,
  };


  const mensaje = saludos[props.idioma];

  return <h1>{mensaje}</h1>;
}

// Validación de props del Saludo
Saludo.propTypes = {
  nombre: PropTypes.string.isRequired, 
  idioma: PropTypes.string, 
};

function App() {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('');
  const [idioma, setIdioma] = useState('español'); 

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
