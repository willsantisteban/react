"# intro" 

React:
Como desarrolladores pensamos en un componente como un arbol (tree).

Todas las aplicaciones en React tienen un sólo componente en el nivel más alto del arbol, nos referimos al Root Component (App)

Todos los componentes tienen 0, 1 o más hijos

En el ejemplo siguiente, un componente puede contener una variedad de números de componentes hijos
> [!IMPORTANT]
> Los eventos que se lanzan dentro del componente pueden tener efecto en cualquier otro componente.

![Imagen 1](https://github.com/willsantisteban/react/blob/main/what-is-react/intro/react_components_ui_interactions.png?raw=true)


Agregando un nuevo componente al "TodoItems"

La UI actualiza practicamente al mismo tiempo que el componente

La UI actualiza en promedio entre 30 a 60 fps
![Imagen 2](https://github.com/willsantisteban/react/blob/main/what-is-react/intro/react_components_ui_interactions_01.png?raw=true)


Diferenciando entre React Components y React Funtions.

Se recomienda utilizar React Functions para representar components sobre clases

Funciones pueden tener más capacidad que las clases cuando empezamos a mejorar y optimizar React.
![Imagen 3](https://github.com/willsantisteban/react/blob/main/what-is-react/intro/react_components_02.png?raw=true)

Si replicamos cuales serían los componenentes en la Imagen 1, podemos evaluar que:
- App Component - Root Component
- AddForm Component que a su vez tiene 2 hijos TextInput Component y AddButton Component.
- TodoItems Component que a su vez tiene n hijos "Item" Component

En React es posible enviar datos, desestructurados es decir parámetros por parámetro por ejemplo:
                <TodoItems entries={toDoList} deleteItem={deleteItem} />
Se envía la lista de items y el objeto/item a eliminar, lo cual hace puntualizar sólo en esos 2 valores de entrada

Distinto cuando se maneja con "props" donde se refiere al conjunto de datos que tiene a su alcance,
esto puede generar que parametros innecesarios puedan estar al alcance y que estos puedan ser manipulados.

![Imagen 3](https://github.com/willsantisteban/react/blob/main/what-is-react/intro/funcion_react_con_parametros.png?raw=true)

Otro de los puntos es que React usa one-way data binding lo cual hace más eficiente la actualización del DOM,
Es decir, ante un cambio compara el DOM viejo vs el DOM actualizado, encuentra las diferencias y mediante un mecanismo llamado "Reconciliation"
actualiza el modelo sólo donde requiere actualización.
La contraparte con otros modelos (mvc o two-way binding) es que la vista siempre está "escuchando" los cambios para actualizar y 
en mucho casos actualiza todo el DOM lo que hace muy lenta la aplicación, con aplicaciones básicas puede andar bien, sin embargo
con aplicaciones escalables esto no es performante.

![Imagen 3](https://github.com/willsantisteban/react/blob/main/what-is-react/intro/diferents_bettwen_render_data_in_react.png?raw=true)


![Imagen 3](https://github.com/willsantisteban/react/blob/main/what-is-react/intro/diferents_bettwen_render_data_in_react_01.png?raw=true)