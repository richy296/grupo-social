
import Link from "next/link";
import {URLS} from '@/urls/urls';

export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general de la prueba</span>

      <ul className="my-8 list-disc hover:list-disc md:list-disc">
        <li>Esta es una aplicación web creada en NextJS 14. Se encarga de consumir los endpoints de la web (https://jsonplaceholder.typicode.com/). </li>

        <li>A la izquierda, tendrán un menú con un diseño basado en los componentes de Octicons (https://primer.style/foundations/icons).  </li>
        
        <li>Desde acá se podrá acceder al modulo de post donde encontrar los post traidos con el metodo get de jsonplaceholder. </li>

        <li>Podrán realizar busquedas (escriben en relación al título del post y en caso de querer mostrar todos los post solo deben darle enter al input vacío), acceder al detalle del post, realizar un scroll el cual cargara a traves de un scroll infinito. </li>

        <li>Padrá agregar un nuevo post, editarlo y eliminar (Visualmente solo se vera reflejado el nuevo post) el editar y eliminar realizan la funcionalidad sin actualizar la vista. </li>

        <li>Internamente se trabajo con una estructura de carpetas, en donde se separaron las paginas, modulos, store, urls y componentes globales. </li>

        <li>Se configuro redux para el manejo de estados el cual se conecta con un middleware que es el encargado de guardar la info del nuevo post, en el localStorage. </li>

        <li>Se crearon paginas especiales de not-found y error de modo que sea más factible para el usuario en dado caso. </li>

        <li>Se configuro y trabajo con el framework de css tailwind. </li>

        <li>Se agrego una imagen a cada post, esto utilizando un url de imagenes de pokemon utilizando el renderizado de imagenes que nos ofrece Next el (Image) </li>

        <li>Se trabajo con el nuevo sistema de rutas de Next. </li>

        <li>Se creo un API para simular un llamado a una BD donde me devuelve el valor inicial de la pagina para el usuario</li>

        <li>La aplicación no quedo tal cual como quería por temas de tiempos me faltó realizar (pruebas unitarías, documentación, 
          finalizar las acciones en el redux de los demás metodos), y pues como siempre la idea es seguir aprendiendo espero sea en esta gran empresa.</li>

        <li>Por mi lado, quedo atento a cualquier comentario, solicitud o segurencia y muchas gracias por la oportunidad.</li>
      </ul>

      <div className="flex flex-wrap p-2 items-center justify-center">
        <Link 
            href={URLS.POSTS_URL}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[200px] mr-2 cursor-pointer">
            Ir a los Posts
        </Link>
      </div>
    </div>
  );
}