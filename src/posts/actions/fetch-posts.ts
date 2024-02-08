import { Post } from '../interfaces/posts';
"use server";

export async function fetchPosts(page: number = 10) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${page}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data as Post[];
    } catch (error) {
       console.log("Error fetching data", error);
       return [] 
    }
}