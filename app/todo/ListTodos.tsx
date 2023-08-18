"use client";

import { useEffect, useRef, useState } from "react";

interface ListTodosProps {
    todos: string[]; // Array to store the list of todos
}

const ListTodos: React.FC<ListTodosProps> = ({ todos }) => {
    const [newlyAddedIndex, setNewlyAddedIndex] = useState<number | null>(null);
    let newTodos = todos;

    useEffect(() => {

        newTodos.forEach((newTodo, index) => {
            setNewlyAddedIndex(index);
            setTimeout(() => {
                setNewlyAddedIndex(null);
            }, 1000);
            console.clear();
            console.log(`New todo added: ${newTodo}`);
        })
    }, [todos]);

    return (
        <div className="list-todos">
            {todos.map((todo, index) => (
                <div 
                    key={index}
                    className={`todo-entry ${newlyAddedIndex === index ? "newAdded" : "added"}`}
                >
                    {todo}
                </div>
            ))}
        </div>
    );
};

export default ListTodos;