
import "./App.css";
import TodoList from "./TodoList";
import ShowsList from './ShowsList'
import './Lists.css';

function App() {
  return (
    <div className = 'listStyle'>
      <TodoList name='Coding To do list'/>
      <TodoList name='Another List'/>
      <ShowsList name='Shows to Watch' />
    </div>
  );
}

export default App;