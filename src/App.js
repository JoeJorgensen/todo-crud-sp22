
import ShowsList from './ShowsList'
import './Lists.css';

function App() {
  return (
    <div className = 'listStyle'>
      <ShowsList name='Shows to Watch' />
      <ShowsList name='Other Shows to Watch' />

    </div>
  );
}

export default App;