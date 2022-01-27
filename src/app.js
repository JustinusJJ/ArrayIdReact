const root = document.querySelector('#root');

function App() {
  const fruits = [
    'Apple',
    'Orange',
    'Grape',
    'Melon',
    // 'Apple' // Will result an error because when used as a key.
    // it's not unique
  ]
  
  // console.log(
  //   // use map cause it supports a return
  //   fruits.map(function (fruit) {
  //     return <li>(fruit)</li>;
  //   })
  // );

  return (
    // needs a unique key
    <ul>
      {fruits.map(function (fruit) {
        return <li key={fruit}>{fruit}</li>;
      })}
    </ul>
  );
}

ReactDOM.render(<App />, root);
