const root = document.querySelector('#root');
console.log("Auto");

function tick() {
  //  React updates only the value
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Time Now"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  ReactDOM.render(element, root); // Render element
  // // Js Updates the whole div
  // const element = `
  //   <div>
  //     <h1>Time Now</h1>
  //     ${new Date().toLocaleTimeString()}
  //   </div>
  // `;
  // root.innerHTML = element;
}

tick();
setInterval(function () {
  tick();
}, 1000);