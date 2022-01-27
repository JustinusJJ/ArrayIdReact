const root = document.querySelector('#root');

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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

      setNews(response);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>Loading data ...</i>
        ) : (
          <ul>
            {news.map(function (item) {
              // console.log(item);
              return <li key={item.id}>{item.title}</li>
            })}
          </ul>
        )
      }
    </>
  );
}

ReactDOM.render(<App />, root);
