
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../posts/interfaces/posts';

interface PostsState {
  posts: {
    [key: string]: Post
  }
}

const initialState: PostsState = {
  posts: {}
}

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<{[key: string]: Post}>){
      state.posts = action.payload
    },
    setNewPost(state, action: PayloadAction<Post>){
      const post = action.payload;
      const {id} = post;

      state.posts[id] = post
    },
  }
});

export const {setNewPost, setPosts} = postsSlice.actions

export default postsSlice.reducer