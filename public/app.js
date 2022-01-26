const root = document.querySelector('#root');

function clickMe(msg) {
  alert(msg);
} // // Cara 1
// const element = (
//   <button onClick={function () {
//     clickMe('Hello');
//   }}>
//     Click Here
//   </button>
// );
// Cara 2


const element = /*#__PURE__*/React.createElement("button", {
  onClick: clickMe.bind(this, 'Hello Again')
}, "Click Here");
ReactDOM.render(element, root); // Render element