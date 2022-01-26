const root = document.querySelector('#root');

function App() {
  const [clicked, setClicked] = React.useState(false);
  const [count, setCount] = React.useState(0);

  // // Called every time App() renders
  // React.useEffect(function () {
  //   console.log(document.getElementById('title'));
  // }, [clicked]); // Parameter 2 determines when will useEffect is called, depending on what
  // // }); // If no parameter 2, then call everytime
  // // }, []); // Will only be called first time it renders
  // // Usualy useEffect with empty Array is used for fetching data or fetching library

  React.useEffect(function() {
    console.log('Init Something');

    return function () {
      console.log('Destroy Something');
    };
  });

  return (
    <>
      <h1 id="title">Hello this a title</h1>
      <button onClick={function () {
        setClicked(true);
      }}>
        Click Here
      </button>
      <button onClick={function () {
        setCount(count + 1);
      }}>
        Add
      </button>
      Current Count : {count}
    </>
  );
}

ReactDOM.render(<App />, root);

// Might result in null if the rendering is too long
// console.log(document.getElementById('title'));
