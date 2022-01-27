const root = document.querySelector('#root');

function App() {
  React.useEffect(function () {
    // Cara 1
    // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    //   .then(function(response) {
    //     // console.log(response);
    //     // console.log(response.json());
    //     return response.json();
    //     //response.JSON -> async
    //   }).then(function (response) {
    //     console.log(response);
    //   }
    // );
    // // console.log(getData);
    // // Promise -> Async, background process, you can do other stuff, no need to wait fetch
  
    // Cara 2
    async function getData() {
      const request = await fetch(
        'https://api.spaceflightnewsapi.net/v3/blogs'
      );
      // console.log(request);

      const response = await request.json();

      console.log(response);
    }
    getData();
  }, []);

  return <h1>Data Fetch</h1>;
}

ReactDOM.render(<App />, root);
