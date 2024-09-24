import React, { useState } from "react";

export default function TodoCard(props) {
    const { todos, handleDeleteTodo, handleEditeTodo, index } = props;
    const [edit, setEdit] = useState(false);
    const [currentTodo, setCurrentTodo] = useState(todos); // Create local state to handle changes

    const handleSave = () => {
        setEdit(false);
        handleEditeTodo(index, currentTodo); // Pass updated todo to parent
    };

    const handleChange = (e) => {
        const newT = { 'name': e.target.value, 'value': todos['value'] };
        setCurrentTodo(newT);
    };

    return (
        <li className="todoItem" style={{ textDecoration: todos['value'] ? 'line-through' : 'none' }}>
            <div>
                <input
                    type="checkbox"
                    checked={todos['value']}
                    onChange={() => {
                        const newT = { 'name': todos['name'], 'value': !todos['value'] };
                        setCurrentTodo(newT);
                        handleEditeTodo(index, newT);
                    }}
                />
            </div>
            {edit ? (
                <input
                    type="text"
                    value={currentTodo['name']} // Use currentTodo for editing
                    onChange={handleChange}
                    onBlur={handleSave}
                    autoFocus
                />
            ) : (
                <span>{todos['name']}</span>
            )}
            <div className="actionsContainer">
                <button onClick={() => setEdit(!edit)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                    onClick={() => {
                        handleDeleteTodo(index); // Trigger delete for the correct todo
                    }}
                >
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    );
}
