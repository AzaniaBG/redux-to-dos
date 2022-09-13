import Todos from '../src/components/Todos';
import TodoList from '../src/components/TodoList';
import CompletedItems from '../src/components/CompletedItems';

import './index.css';

export default function App() {

    return (
        <div className="className='container bg-white p-4 mt-5'">
            <Todos />
            <TodoList />
            <CompletedItems />
        </div>
    );
};
