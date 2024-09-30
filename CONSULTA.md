¿Cuál es la diferencia entre un componente UI y un componente funcional en React? 

Principales Diferencias:

Componente de UI:
Se centra en la apariencia (UI).
Renderiza datos recibidos a través de props.
No maneja lógica compleja ni tiene estado propio.

Componente Funcional:
Se centra en la lógica de negocio.
Gestiona el estado y maneja efectos secundarios (como llamadas a APIs).
Puede manipular y transformar datos antes de pasarlos a los componentes de UI.


¿Qué son las props en React y cuál es su propósito principal? 

Son un mecanismo para pasar datos desde un componente padre a un componente hijo. Su propósito principal es permitir la reutilización de componentes y permitir que estos reciban información externa para renderizar contenido dinámico. Las props son inmutables, lo que significa que no pueden ser modificadas por el componente que las recibe.

¿Qué son los children props en React y por qué no se recomienda su uso excesivo? 

Los children props en React son una forma de pasar componentes o elementos como hijos a un componente, permitiendo que este renderice contenido adicional dentro de su estructura. Esto es útil para crear componentes más flexibles y reutilizables.

Por qué se desaconseja su uso excesivo:
Complejidad del código: Un uso excesivo de children props puede hacer que el código sea más difícil de seguir, ya que la jerarquía de los componentes puede volverse confusa.

Rendimiento: Utilizar children props en exceso puede llevar a re-renderizados innecesarios, lo que puede afectar la eficiencia de la aplicación.

Claridad en la API: Si no se gestionan correctamente, los children props pueden dificultar la comprensión de cómo debe usarse un componente, lo que puede generar confusión entre los desarrolladores que trabajan en el mismo proyecto.

¿Qué es useState en React y para qué se utiliza principalmente? 

useState es un hook en React que permite añadir estado a los componentes funcionales. Se utiliza principalmente para manejar y actualizar valores que cambian con el tiempo, como el contenido de formularios, contadores, o cualquier dato dinámico. Cuando se invoca, useState devuelve un par: el valor actual del estado y una función para actualizar ese valor.