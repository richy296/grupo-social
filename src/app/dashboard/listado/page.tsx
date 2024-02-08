import { fetchPosts } from "@/posts/actions/fetch-posts";
import { Post, PostGrid } from "@/posts";
export const metadata = {
  title: 'Posts',
  description: 'Posts traidos de JSONplaceholder',
};

const getPosts = async(): Promise<Post[]> => {
  const post = await fetchPosts(0) || [];
  return post;
}

export default async function ListadoPage() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-4 mx-4">
        <span className="text-5xl my-3">Listado de <small className="text-blue-500">posts</small></span>
      </div>
      <PostGrid posts={posts}/>
    </div>
  );
}

