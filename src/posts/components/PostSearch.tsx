'use client'
import { useState } from "react";

export const PostSearch = ({onNewSearch}: any) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}: any) => {
        setInputValue(target.value)
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();        
        onNewSearch(newInputValue.toLocaleLowerCase())
        setInputValue('');
    }

    return (
        <form className="flex w-full" onSubmit={onSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
                <input 
                    type="text" 
                    placeholder="Buscar Post"
                    value={inputValue}
                    onChange={onInputChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
        </form>
    )
}
