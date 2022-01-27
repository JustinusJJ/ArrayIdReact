const root = document.querySelector('#root');

function App() {
  const fruits = ['Apple', 'Orange', 'Grape', 'Melon' // 'Apple' // Will result an error because when used as a key.
  // it's not unique
  ]; // console.log(
  //   // use map cause it supports a return
  //   fruits.map(function (fruit) {
  //     return <li>(fruit)</li>;
  //   })
  // );

  return (
    /*#__PURE__*/
    // needs a unique key
    React.createElement("ul", null, fruits.map(function (fruit) {
      return /*#__PURE__*/React.createElement("li", {
        key: fruit
      }, fruit);
    }))
  );
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);