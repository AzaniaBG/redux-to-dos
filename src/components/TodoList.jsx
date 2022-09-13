import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
    // const todos = useSelector((state) => state.todos);
    const todos = useSelector((state) => state.todos.filter((todo) => todo.completed === false));

    return (
        <ul>
            {todos && todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    id={todo.id} 
                    title={todo.title} 
                    completed={todo.completed} 
                />
            ))}
        </ul>
    );
}
