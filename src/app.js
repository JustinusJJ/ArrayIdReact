const root = document.querySelector('#root');

function App() {
  // Cara 1
  // const state = React.useState(0);
  // const count = state[0];
  // const updateCount = state[1];

  // Cara 2
  const [count, setCount] = React.useState(0);
  
  return (
    <>
      <button onClick={ function () {
        setCount(count - 1);
      }}>
        -
      </button>
      <span>{count}</span>
      <button onClick={ function () {
        setCount(count + 1);
      }}>
        +
      </button>
    </>
  );
}

ReactDOM.render(<App />, root);
