import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React, {Fragment} from "react";
import axios from "axios";
import { Router, Route, Routes, } from "react-router-dom";
import { Home } from "./Pages/Home";
import {Favorites} from "./Pages/Favorites";

function App() {
    const [items, setItems] = React.useState();
    const [cartItems, setCartItems] = React.useState();
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    React.useEffect(() => {
        axios.get('https://6698cc712069c438cd70111f.mockapi.io/api/sneakers/items').then((res) => {
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
        setCartItems((prev) => [...prev, obj]);
    }
    const onChangeSearchInput = event => {
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
         <Routes>
             <Route path="/" element={<Home
                 items={items}
                 searchValue={searchValue}
                 onChangeSearchInput={onChangeSearchInput}
                 onAddToCart={onAddToCart}
             />}>
             </Route>
             <Route path="/favorites" element={<Favorites
             />}>
             </Route>
         </Routes>


      </div>


    </div>
  );
}

export default App;
