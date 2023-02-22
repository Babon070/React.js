import "./App.scss";
import Header from "./component/header/Header";
import Routes from "./routes/Router";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes/>
    </div>
  );
}

export default App;
