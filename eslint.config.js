import js from '@eslint/js' // Importa la configuración y reglas recomendadas de ESLint para JavaScript.
import globals from 'globals' // Importa las variables globales conocidas, como las del entorno del navegador.
import react from 'eslint-plugin-react' // Importa el plugin ESLint para React, que añade reglas específicas para React.
import reactHooks from 'eslint-plugin-react-hooks' // Importa el plugin ESLint para los hooks de React, asegurando el correcto uso de los hooks.
import reactRefresh from 'eslint-plugin-react-refresh' // Importa el plugin ESLint para el soporte de React Fast Refresh, que permite actualizaciones rápidas en desarrollo.

export default [
  { ignores: ['dist'] }, // Ignora la carpeta 'dist' (generalmente contiene archivos de producción) al ejecutar ESLint.
  {
    files: ['**/*.{js,jsx}'], // Aplica esta configuración a todos los archivos con extensiones .js o .jsx.
    languageOptions: {
      ecmaVersion: 2020, // Establece el nivel de ECMAScript (JavaScript) a la versión 2020.
      globals: globals.browser, // Define el entorno de navegador (incluye variables globales como window y document).
      parserOptions: {
        ecmaVersion: 'latest', // Utiliza la versión más reciente de ECMAScript disponible.
        ecmaFeatures: { jsx: true }, // Habilita el soporte para JSX (sintaxis de React).
        sourceType: 'module', // Indica que el código está escrito usando módulos ES6 (import/export).
      },
    },
    settings: { react: { version: '18.3' } }, // Configura el plugin de React para utilizar la versión 18.3.
    plugins: {
      react, // Activa las reglas del plugin de React.
      'react-hooks': reactHooks, // Activa las reglas del plugin para hooks de React.
      'react-refresh': reactRefresh, // Activa las reglas del plugin para React Refresh, ayudando a las actualizaciones en caliente (Hot Module Replacement).
    },
    rules: {
      ...js.configs.recommended.rules, // Aplica las reglas recomendadas por ESLint para JavaScript.
      ...react.configs.recommended.rules, // Aplica las reglas recomendadas para React.
      ...react.configs['jsx-runtime'].rules, // Aplica las reglas específicas para el nuevo JSX transform de React 17+ (jsx-runtime).
      ...reactHooks.configs.recommended.rules, // Aplica las reglas recomendadas para el uso de hooks en React.
      'react/jsx-no-target-blank': 'off', // Desactiva la regla que previene el uso de target="_blank" sin rel="noopener noreferrer".
      'react-refresh/only-export-components': [
        'warn', // Muestra una advertencia si no se exportan solo componentes en el contexto de React Refresh.
        { allowConstantExport: true }, // Permite exportar constantes junto con los componentes en el contexto de React Refresh.
      ],
    },
  },
]
