const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);
  
  // if(login) {
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

  return (
      <>
        <h1>Application</h1>
        {/* <p>{login ? <b>Logged In</b> : <b>Please Log In</b>}</p> */}
        {/* <p>{login && <b>Logged In</b>}</p> */}
        <p>{login == true && <b>Logged In</b>}</p>
        <button
          onClick={function () {
            setLogin(true);
          }}>
            Login
        </button>
      </>
    );
}

ReactDOM.render(<App />, root);
