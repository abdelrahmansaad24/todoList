import react, {useState} from "react";

export default function TodoInput(props) {
    const {handleADDTodo} = props;
    const [newTodo,setNewTodo] = useState({'name':'' , 'value':false});

    return (
        <header >
            <input value={newTodo['name']} onChange={(e)=> {
                setNewTodo({'name': e.target.value,'value':false})
            }} placeholder={"Enter Todo..."}/>
            <button onClick={()=>{
                handleADDTodo(newTodo);
                setNewTodo({
                    name:'',
                    checked: false
                })
            }}>ADD</button>
        </header>
    );
}