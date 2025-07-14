import { useTodos } from "../../hooks/useTodos";
import TodoCheckbox from "../ui/TodoCheckbox";
import AddTodoInput from "../ui/AddTodoInput";

export type TodoType = {
    id: number;
    name: string;
    checked: boolean;
};

const TodoList = () => {
    const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

    return (
        <section className="max-w-2xl mx-auto">
            <div className="space-y-3">
                <h1 className="text-4xl font-bold text-center text-primary-900">To Do List</h1>
                <div className="p-6 border border-primary-900 rounded-md h-[548px] overflow-y-auto">
                    {todos.length === 0 ? (
                        <p className="text-center text-primary-300">No todos available. Add a new todo!</p>
                    ) : (
                        <ul className="space-y-4">
                            {todos.map((todo) => (
                                <TodoCheckbox
                                    key={todo.id}
                                    {...todo}
                                    onChange={() => toggleTodo(todo.id)}
                                    onDelete={() => deleteTodo(todo.id)}
                                />
                            ))}
                        </ul>
                    )}
                </div>
                <AddTodoInput onAddTodo={addTodo} />
            </div>
        </section>
    );
};

export default TodoList;