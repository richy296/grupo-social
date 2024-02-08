'use client'
import Image from 'next/image';
import { Post } from '../interfaces/posts';
import Link from 'next/link';

interface Props {
    post: Post;
}

export const PostItem = ({post}: Props) => {
    let {id, title, body} = post;
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/`;

    const onUpdatePost = async (post: Post) => {
        try {
            const response = await fetch(`${apiUrl}/${post.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: 1,
                    title: 'Titulo actualizado',
                    body: 'Body Actualizado',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },  
            });
            const newPost = await response.json();
            console.log(newPost)
        } catch (error) {
           console.log("Error fetching data", error);
           return [] 
        }
    }

    const onDeletePost = async (post: Post) => {
        try {
            const response = await fetch(`${apiUrl}/${post.id}`, {
                method: 'DELETE',
            });
            const newPost = await response.json();
            console.log(newPost)
        } catch (error) {
            console.log("Error fetching data", error);
           return [] 
        }
    }

    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center text-center justify-center p-6 bg-gray-800 border-b">
                    <Image 
                        key={id}
                        alt={title}
                        width={100}
                        height={100}
                        priority={false}
                        sizes="100vw"
                        style={{ width: '100px', height: '100px' }}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />

                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{title}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/listado/detalle/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Ir a detalle
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <div 
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                        <div className="pl-3">
                            {body}
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-2 bg-gray-800">
                        <button 
                            onClick={() => onUpdatePost(post)}
                            className="flex items-center justify-center p-2 rounded-xl bg-sky-600 text-white hover:bg-sky-900 transition-all w-[100px] mr-2">
                            Actualizar 
                        </button>
                        <button 
                            onClick={() => onDeletePost(post)}
                            className="flex items-center justify-center p-2 rounded-xl bg-red-600 text-white hover:bg-red-900 transition-all w-[100px] mr-2">
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}