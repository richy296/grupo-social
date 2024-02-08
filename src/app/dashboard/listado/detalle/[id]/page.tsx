import Image from "next/image";
import { Post } from "@/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
  params: {id: string}
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  try {
    const {id, title} = await getPost(params.id);

    return {
        title: `#${id} - ${title}`,
        description: `Página del post ${title}`,
    }
  } catch (error) {
    return {
      title: `Página del post`,
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique nostrum incidunt perspiciatis earum provident labore corrupti aperiam quia velit excepturi quis impedit, voluptate animi, cum omnis laboriosam reprehenderit architecto inventore.`,
    }
  }  
}

const getPost = async(id: string): Promise<Post> => {

  try {

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'force-cache',
    }).then(resp => resp.json());
    
    return post
    
  } catch (error) {
    notFound();
  }

}

export default async function ListadoDetailPage({params}: Props) {
  const {id, title, body} = await getPost(params.id);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <Link href="/dashboard/listado" className="p-3 w-full cursor-pointer">
          <IoArrowBackCircleOutline size={30}/>
        </Link>
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            Post #{id} - {title}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={150}
              height={150}
              sizes="100vw"
              style={{ width: '150px', height: '150px' }}
              alt={`Imagen del pokemon ${title}`}
              className="mb-5"
            />
            <div className="flex flex-wrap">
              { body }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}