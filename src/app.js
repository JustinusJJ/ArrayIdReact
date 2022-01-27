const root = document.querySelector('#root');

function App() {
  // const nameRef = React.useRef(null);
  const [name, setName] = React.useState('Default');

  function whenSubmit(event) {
    event.preventDefault(); // Prevents redirect/render
    // const name = nameRef.current.value;
    console.log('Nama: ', name);
  }

  return (
    <form onSubmit={whenSubmit}>
      <div>
        <label>Nama: </label>
        {/* <input type="text" name="name" ref={nameRef} /> */}
        <input 
          type="text"
          name="name"
          value={name}
          onChange={function (event) {
            setName(event.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

ReactDOM.render(<App />, root);
