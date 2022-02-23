
import {useState} from 'react'

const Todolist = (props)=>{
    // if initial props was givin use that else use empty array
    const [todos,setTodos] =useState(props.initialTodo || []);
    const[todo, setTodo] = useState('')
    // read
    // [{id,todo,completed}] => [<p>todo</p>]
    const renderTodos =() =>{
       return todos.map((x)=>{
            return(
                <div 
                key={x.id} 
                style ={{textDecoration : x.completed ? 'line-through':''}}
                > 
                     <p onClick ={()=> toggleTodo(x.id)}>{x.todo}</p>
                    <button onClick ={()=>deleteTodo(x.id)}>Delete</button>
                   
                </div>
               
            );
        });
    };
    const toggleTodo =(idOfTodoClicked)=>{
        const updatedTodos = todos.map((todo)=>{
            if(todo.id === idOfTodoClicked){
                return {...todo, completed : !todo.completed}
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const deleteTodo = (id)=>{  
    let filterTodos = todos.filter(x=>{
    return x.id !==id
})
    setTodos(filterTodos)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(event)
        console.log('todo:', todo)
        // Add todo without mutating
        const newTodos = [...todos, {id: Math.random(), todo: todo, completed:false}]
        setTodos(newTodos)
        setTodo('')
    }
    return(
        <div>
            <h1>{props.name}</h1>
            <form onSubmit={handleSubmit}>
                <p>To do:</p>
                <input value={todo} onChange={(event)=> {setTodo(event.target.value)}}/>
                <button type ='submit'>add</button>
            </form>
            <div>{renderTodos()}</div>
           {/* {todos[0]&&<p>first to do id: {todos[0].id}</p>}  */}
        </div>

      );
};
export default Todolist;
