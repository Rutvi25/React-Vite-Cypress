import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h2 data-cy='heading'>Todo Application</h2>
      <TodoList />;
    </>
  );
}

export default App;
