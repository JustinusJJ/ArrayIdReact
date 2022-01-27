const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');
  
  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if(!activity) {
      // return console.log('Insert');
      return setMessage('Activity can\'t be nil');
    }

    setMessage('');

    if (edit.id) {
      // console.log('edit');
      const updatedTodo = {
        ... edit,
        activity
      };
      // console.log(updatedTodo);
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id == edit.id;
      });

      const updatedTodos = [
        ... todos
      ];

      // console.log(editTodoIndex);
      // console.log(updatedTodos[editTodoIndex]);
      updatedTodos[editTodoIndex] = updatedTodo;
      // console.log(updatedTodos);

      
      setTodos(updatedTodos);

      return cancelEditHandler();
    }

    setTodos([
      ... todos, {
        id: generateId(),
        // activity: activity
        activity,
        done: false
      }
    ]);

    setActivity('');
  }

  function removeTodoHandler(todoId) {
    // console.log(todoId);
    const filteredTodos = todos.filter(function (todo) {
      // console.log(todoId, todo.id);
      return todo.id != todoId;
    });

    // console.log(filteredTodos);
    // console.log(todos);
    setTodos(filteredTodos);
    if(edit .id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEditHandler() {
    // console.log('Cancel Edit');
    setEdit({});
    setActivity('');
  }

  function doneTodoHandler(todo) {
    // console.log(todo);
    const updatedTodo = {
      // id: todo.id,
      // activity: todo.activity,
      ... todo,
      done: todo.done ? false : true
    };
    
    // console.log(updatedTodo);

    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id == todo.id;
    });

    const updatedTodos = [ ... todos];
    updatedTodos[editTodoIndex] = updatedTodo

    // console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Simple To-do List</h1>
      {message && <div style={{color: 'red'}}>
        {message}
      </div>}
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Activity Name"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">
          {edit.id ? 'Change' : 'Add'}
        </button>
        {edit.id && <button onClick={cancelEditHandler}>
            Cancel Edit
          </button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)} />
                {todo.activity}
                ({todo.done ? 'DONE' : 'Unfinished'})
                <button onClick={editTodoHandler.bind(this, todo)}>
                  Edit
                </button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Empty</i>
        </p>
      )}
    </>
  )
}

ReactDOM.render(<App />, root);
