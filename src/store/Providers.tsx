'use client'
import { Provider } from "react-redux"
import { store } from './index';
import { useEffect } from "react";
import { setPosts } from "./posts/postsSlice";

interface Props {
    children: React.ReactNode
}
export const Providers = ({children}: Props) => {

  useEffect(() => {
    const post = JSON.parse(localStorage.getItem('new-post') ?? '{}');
    store.dispatch(setPosts(post));
  }, [])

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
