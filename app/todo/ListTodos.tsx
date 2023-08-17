"use client";

interface ListTodosProps {
    todos: string[]; // Array to store the list of todos
}

const ListTodos: React.FC<ListTodosProps> = ({ todos }) => {
    return (
        <div className="list-todos">
            {todos.map((todo, index) => (
                <div key={index} className="todo-entry">{todo}</div>
            ))}
        </div>
    );
};

export default ListTodos;