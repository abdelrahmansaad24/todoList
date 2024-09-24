import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function App() {
    const [todo, setTodo] = useState(() => {
        // Initialize state from cookies
        const value = Cookies.get('todo');
        return value ? JSON.parse(value) : [];
    });

    // Update the cookie whenever the todos change
    useEffect(() => {
        Cookies.set('todo', JSON.stringify(todo), { expires: 30 });
    }, [todo]);

    function handleADDTodo(newTodo) {
        setTodo(prevTodos => [...prevTodos, newTodo]);
    }

    function handleDeleteTodo(index) {
        setTodo(prevTodos => prevTodos.filter((_, todoIndex) => todoIndex !== index));
    }

    function handleEditeTodo(index, editedTodo) {
        setTodo(prevTodos => {
            const newTodos = [...prevTodos];
            newTodos[index] = editedTodo;
            return newTodos;
        });
    }


    return (
        <>
            <main className='main'>
                <TodoInput handleADDTodo={handleADDTodo} />
                <TodoList todo={todo} handleDeleteTodo={handleDeleteTodo} handleEditeTodo={handleEditeTodo} />
                {
                    todo.length!== 0 ? <div className={'row'} >
                        <button className={'delete'} onClick={()=>{
                            Cookies.set('todo', JSON.stringify([]), { expires: 30 });
                            setTodo([]);
                        }}>clear </button>
                    </div> : <div></div>
                }


            </main>
        </>
    )
}

export default App;
