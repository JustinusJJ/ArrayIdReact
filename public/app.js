const root = document.querySelector('#root');

function App() {
  // Hooks = a way for react to deliver
  // a React Feature like a State Management 
  // in a Class Component to Function Component
  // class ... extends React.Component {}
  // constructur(props){super(props); this.state = {date: new Date()};}
  // -> similar to useState
  // componentDidMount() -> run when it's first called (equal to useEffect)
  // componentWillUnmout() -> equal to useEffect return
  const [login, setLogin] = React.useState(false);
  const titleRef = React.useRef(null); // useRef ga re-render lagi, useState render
  // React.useEffect(function () {
  //   const title = document.getElementById('title');
  //   setTimeout(function () {
  //     title.textContent = 'App';
  //   }, 1000);
  // }, []);

  React.useEffect(function () {
    setTimeout(function () {
      titleRef.current.textContent = 'App';
    }, 1000);
  }, []); // return (
  //   <>
  //     <h1 id="title">Application</h1>
  //   </>
  // );

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: titleRef
  }, "Application"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);