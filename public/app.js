const root = document.querySelector('#root');

function App() {
  // Cara 1
  // const state = React.useState(0);
  // const count = state[0];
  // const updateCount = state[1];
  // Cara 2
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);