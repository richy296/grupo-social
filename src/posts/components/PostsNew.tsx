import React from 'react'
import { PostItem } from './PostItem'
import { Post } from '..'

interface Props {
    newPosts: Post[]
  }

export const PostsNew = ({newPosts}: Props) => {
  return (
    <div className="flex flex-wrap gap10 items-center justify-center">
        {
          newPosts.map(post => (
            <PostItem key={`${post.id}`} post={post} />
          ))
        }
      </div>
  )
}
