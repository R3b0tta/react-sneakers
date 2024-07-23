import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route, Routes, } from "react-router-dom";
import { Home } from "./Pages/Home";
import {Favorites} from "./Pages/Favorites";

function App() {
    const [items, setItems] = React.useState();
    const [cartItems, setCartItems] = React.useState();
    const [favorites, setFavorites] = React.useState();
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    React.useEffect(() => {
        const getData = async () => {
            try {
            const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                axios.get('http://localhost:4000/cart'),
                axios.get('http://localhost:4000/favorites'),
                axios.get('http://localhost:4000/items'),
            ]);

            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }
        getData();
    }, [])
    const onDeleteToCart = async (id) => {
        const resp = await axios.delete(`http://localhost:4000/cart/${id}` )
        setCartItems((prev) => prev?.filter(item => item.id !== id));
    }

    const onAddToCart = (obj) => {
        axios.post('http://localhost:4000/cart', obj)
        setCartItems((prev) => [...prev, obj]);
    }
    const onAddToFavorites = async (obj) => {
        if(favorites?.find((favObj) => favObj.id === obj.id)) {
            axios.delete(`http://localhost:4000/favorites/${obj.id}`, obj)
        } else {
            const {data} = await axios.post('http://localhost:4000/favorites', obj)
            setFavorites((prev) => [...prev, data]);
            }
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
                 onAddToFavorites={onAddToFavorites}
             />}>
             </Route>
             <Route path="/favorites" element={<Favorites
                 items={favorites}
                 onAddToFavorites={onAddToFavorites}
             />}>
             </Route>
         </Routes>


      </div>


    </div>
  );
}

export default App;
