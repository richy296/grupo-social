'use client'
import { Post, PostSearch } from '@/posts';
import { useEffect, useState } from 'react';
import { PostsNew } from './PostsNew';
import { PostLoadMore } from './PostLoadMore';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { setNewPost } from '@/store/posts/postsSlice';

interface Props {
  posts: Post[]
}


const getApiPost= async(): Promise<Post> => {
  const data = await fetch('/api/post').then(res => res.json());
  return data as Post
}

export const PostGrid = ({posts}: Props) => {

  const [newPosts, setNewPosts] = useState(posts);
  const [page, setPage] = useState(0);
  const postsState = useAppSelector(state => state.post);
  const dispatch = useAppDispatch()

  useEffect(() => {
    getApiPost()
      .then(({page}) => setPage(page!))
  }, [])
  
  const onSearchPost = (newSearch: string) => {
    if (newSearch.length <= 1) {
      setNewPosts(posts)
      return;
    }
    setNewPosts(posts.filter(post => post.title.toLocaleLowerCase().includes(newSearch)));
  }

  const onAddNewPost = async() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    try {
        const response = await fetch(apiUrl, {
          method: 'post',
          body: JSON.stringify({title: 'Titulo', body: 'new', userId: 1}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
         });

        const newPost = await response.json();
        setNewPosts([newPost, ...posts])
        dispatch(setNewPost(newPost))
    } catch (error) {
       console.log("Error fetching data", error);
       return [] 
    }
  }
  
  return (
    <>
      <div className="flex justify-between items-center my-4 mx-4">
          <PostSearch onNewSearch={(newSearch: string) => onSearchPost(newSearch)}/> 
          <button 
            onClick={onAddNewPost}
            className="flex items-center justify-center p-2 rounded-xl bg-sky-600 text-white hover:bg-sky-900 transition-all w-[200px] mr-2">
            <IoAddCircleOutline size={30} className="mr-2"/> Nuevo post 
          </button>
      </div>
      <PostsNew newPosts={newPosts} />
      {posts.length === newPosts.length && (
        <PostLoadMore page={page}/>
      )}  
    </>
  )
}
