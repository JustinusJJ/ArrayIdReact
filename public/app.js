const root = document.querySelector('#root');

function App() {
  // const nameRef = React.useRef(null);
  const [name, setName] = React.useState('Default');

  function whenSubmit(event) {
    event.preventDefault(); // Prevents redirect/render
    // const name = nameRef.current.value;

    console.log('Nama: ', name);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: whenSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: name,
    onChange: function (event) {
      setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);