import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

import './Todos.css';

export default function TodoItem({ id, title, completed }) {
    const dispatch = useDispatch();

    const handleToggleComplete = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    }
    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }))
    }


    return (
        <fieldset>
            <input 
                id={id} 
                type="checkbox" 
                checked={completed} 
                onChange={handleToggleComplete} 
            />
            <label htmlFor={title}>{title}</label>
            <button>edit</button>
            <button onClick={handleDeleteClick}>delete</button>
        </fieldset>
    );
}
