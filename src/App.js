import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Drawer/>
          <Header/>
        <div className="content ml-40 mr-40">
            <div className="d-flex justify-between align-center">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    <input placeholder="Поиск..."  type="search"/>
                </div>
            </div>
        </div>
          <div className="d-flex flex-wrap justify-center">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>


      </div>


    </div>
  );
}

export default App;
