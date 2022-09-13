import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function CompletedItems() {
    const completed = useSelector((state) => 
        state.todos.filter((todo) => todo.completed === true)
    );

    return (
        <>
            <h2>Completed: </h2>
            <ul>
                
                {completed && completed.map((c) => (
                    <TodoItem
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        completed={c.completed}
                    />
                ))}
            </ul>
        </>
    );
}
