'use client'
import React, { useEffect, useState } from 'react'
import { Post } from '../interfaces/posts';
import { useInView } from 'react-intersection-observer';
import { SimpleSpinner } from '@/components/dashboard/SimpleSpinner';
import { fetchPosts } from '@/posts/actions/fetch-posts';
import { PostsNew } from './PostsNew';

interface Props {
    page: number;
}

export const PostLoadMore = ({page}: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [pageLoaded, setPageLoaded] = useState(page);

    const {ref, inView} = useInView();

    const loadMorePosts = async() => {
        const nextPage = pageLoaded + 1; // Infinite scroll (pageLoaded % 10) + 1;
        const newPosts = await fetchPosts(nextPage) ?? [];
        setPosts((prevPosts: Post[]) => [...prevPosts, ...newPosts]);
        setPageLoaded(nextPage);
    }

    useEffect(() => {
      if (inView) {
       loadMorePosts()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])
    
    return (
        <>
            <PostsNew newPosts={posts} />
            <div className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3' ref={ref}>
                <SimpleSpinner />
            </div>
        </>
        
    )
}
