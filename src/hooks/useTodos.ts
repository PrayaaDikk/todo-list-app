import { useState } from "react";
import type { TodoType } from "../components/partials/TodoList";

const initialTodos: TodoType[] = [
    { id: 1, name: "Take a bath", checked: false },
    { id: 2, name: "Clean up the house", checked: false },
    { id: 3, name: "Go to the gym", checked: false },
    { id: 4, name: "Study", checked: false },
    { id: 5, name: "Go for a walk", checked: false },
];

export function useTodos() {
    const [todos, setTodos] = useState<TodoType[]>(initialTodos);

    const addTodo = (name: string) => {
        const newTodo: TodoType = {
            id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
            name,
            checked: false,
        };
        setTodos(prev => [...prev, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return { todos, addTodo, toggleTodo, deleteTodo };
}