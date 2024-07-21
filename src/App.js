import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";


function App() {
    const [items, setItems] = React.useState();
    const [cartItems, setCartItems] = React.useState();
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    React.useEffect(() => {
        axios.get('https://6698cc712069c438cd70111f.mockapi.io/api/sneakers/item').then((res) => {
            setItems(res.data);
        });
        axios.get('https://6698cc712069c438cd70111f.mockapi.io/api/sneakers/Cart').then((res) => {
            setCartItems(res.data)
        });
    }, [])
    const onDeleteToCart = (id) => {
        axios.delete(`https://6698cc712069c438cd70111f.mockapi.io/api/sneakers/Cart/${id}`)
        setCartItems((prev) => prev?.filter(item => item.id !== id));
    }
    const onAddToCart = (obj) => {
        axios.post('https://6698cc712069c438cd70111f.mockapi.io/api/sneakers/Cart', obj)
        setCartItems(prev => [...prev, obj]);
    }
    const onChaneSearchInput = event => {
        setSearchValue(event.target.value);
    }


  return (
    <div className="App">
      <div className="wrapper">
          {cartOpened && <Drawer
              onMinus={(obj) => onDeleteToCart(obj)}
              items={cartItems}
              CloseCart={() => setCartOpened(false)}
          />}

          <Header OpenCart={() => setCartOpened(true)}/>
        <div className="content ml-40 mr-40">
            <div className="d-flex justify-between align-center">
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}`  : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    <input className="clear" onChange={onChaneSearchInput } placeholder="Поиск..."  type="search"/>
                </div>
            </div>
        </div>
          <div className="d-flex flex-wrap justify-center">
              {items
                  ?.filter((item) => item.title.toLowerCase().includes(searchValue?.toLowerCase()))
                  .map((item, index) => (
                      <Card
                          key = {index}
                          title={item.title}
                          price={item.price}
                          imageURL={item.imageURL}
                          onPlus={(obj) => onAddToCart(obj)}
                      />
                  ))
              }

      </div>


      </div>


    </div>
  );
}

export default App;
