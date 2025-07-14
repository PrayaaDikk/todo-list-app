import React, { useState } from "react";

type AddTodoInputProps = {
    onAddTodo: (name: string) => void;
};

const AddTodoInput: React.FC<AddTodoInputProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (trimmed) {
            onAddTodo(trimmed);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between px-6 py-3 border border-primary-900 rounded-md text-primary-900 gap-4">
                <input
                    type="text"
                    id="todo-input"
                    placeholder="Add a todo"
                    className="block w-full focus:outline-none placeholder:text-primary-300 cursor-pointer"
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <button type="submit" className="cursor-pointer" aria-label="Add todo">
                    <svg className="size-5" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 10H15.5M10.5 5V15" stroke="#0E1C2F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default AddTodoInput;