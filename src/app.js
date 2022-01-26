const root = document.querySelector('#root');

console.log("Auto Compile");

function tick() {
  //  React updates only the value
  const element = (
    <div>
      <h1>Time Now</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  
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