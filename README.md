Esta es una aplicación web creada en NextJS 14. Se encarga de consumir los endpoints de la web (https://jsonplaceholder.typicode.com/). 
A la izquierda, tendrán un menú con un diseño basado en los componentes de Octicons (https://primer.style/foundations/icons).  
Desde acá se podrá acceder al modulo de post donde encontrar los post traidos con el metodo get de jsonplaceholder. 
Podrán realizar busquedas (escriben en relación al título del post y en caso de querer mostrar todos los post solo deben darle enter al input vacío), acceder al detalle del post, realizar un scroll el cual cargara a traves de un scroll infinito. 
Padrá agregar un nuevo post, editarlo y eliminar (Visualmente solo se vera reflejado el nuevo post) el editar y eliminar realizan la funcionalidad sin actualizar la vista. 
Internamente se trabajo con una estructura de carpetas, en donde se separaron las paginas, modulos, store, urls y componentes globales. 
Se configuro redux para el manejo de estados el cual se conecta con un middleware que es el encargado de guardar la info del nuevo post, en el localStorage. 
Se crearon paginas especiales de not-found y error de modo que sea más factible para el usuario en dado caso. 
Se configuro y trabajo con el framework de css tailwind. 
Se agrego una imagen a cada post, esto utilizando un url de imagenes de pokemon utilizando el renderizado de imagenes que nos ofrece Next el (Image) 
Se trabajo con el nuevo sistema de rutas de Next. 
Se creó el archivo docker para facilidad al levantar la app
Se creo un API para simular un llamado a una BD donde me devuelve el valor inicial de la pagina para el usuario
La aplicación no quedo tal cual como quería por temas de tiempos me faltó realizar (pruebas unitarías, documentac
Por mi lado, quedo atento a cualquier comentario, solicitud o segurencia y muchas gracias por la oportunidad.