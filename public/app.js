const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false); // if(login) {
  //   return (
  //     <>
  //       <h1>Logged In!</h1>
  //       <button
  //         onClick={function () {
  //           setLogin(false);
  //         }}>
  //           Logout
  //       </button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <h1>Login Please</h1>
  //     <button
  //       onClick={function () {
  //         setLogin(true);
  //       }}>
  //         Login
  //     </button>
  //   </>
  // );

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Application"), /*#__PURE__*/React.createElement("p", null, login == true && /*#__PURE__*/React.createElement("b", null, "Logged In")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);