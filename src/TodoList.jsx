import react from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
    const {todo} = props;
    return (
        <div className={'list'}>
            {todo.map((todo,todoIndex)=>{
                return (
                    <TodoCard key={todoIndex} {...props} todos={todo} index={todoIndex}>
                    </TodoCard>
            )

            })}
        </div>
    );
}