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
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs'); // console.log(request);

      const response = await request.json();
      setNews(response);
      setLoading(false);
    }

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading data ...") : /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    // console.log(item);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);