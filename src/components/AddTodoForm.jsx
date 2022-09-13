import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

import './Todos.css';

export default function AddTodoForm() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value) {
            dispatch(addTodo({
                title: value,
            }));
        }
        setValue("");
    }

    return (
        <form>
            <fieldset className="add-todo">
                <legend><h2>Add To Do</h2></legend>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="to do"
                />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </fieldset>
        </form>
    );
}
