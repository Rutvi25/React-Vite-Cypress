import { useState } from 'react';

const TodoList = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [todoListItems, setTodoListItems] = useState<
    { key: number; task: string }[]
  >([]);

  const handleAddTodo = () => {
    if (!taskTitle) {
      alert("Task title can't be empty.");
    } else {
      const newTodo = { key: Date.now(), task: taskTitle };
      setTodoListItems([...todoListItems, newTodo]);
      setTaskTitle('');
    }
  };

  const handleDeleteTodo = (key: number) => {
    const filteredItems = todoListItems.filter((task) => task.key !== key);
    setTodoListItems(filteredItems);
  };

  return (
    <>
      <div className='create-todo'>
        <input
          data-cy='task-input'
          placeholder='Add Todos'
          autoFocus
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button data-cy='add-task-btn' onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div data-cy='todo-item-list'>
        {todoListItems.map((todo) => {
          return (
            <div className='todo-item' key={todo.key}>
              <div>{todo.task}</div>
              <button
                data-cy='delete-task-btn'
                onClick={() => handleDeleteTodo(todo.key)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
