import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Route, Routes, } from "react-router-dom";
import { Home } from "./Pages/Home";
import {Favorites} from "./Pages/Favorites";
import AppContext from "./context";


function App() {
    const [items, setItems] = React.useState();
    const [cartItems, setCartItems] = React.useState();
    const [favorites, setFavorites] = React.useState();
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const getData = async () => {
            try {
            const [itemsResponse, cartResponse, favoritesResponse] = await Promise.all([
                axios.get('http://localhost:4000/items'),
                axios.get('http://localhost:4000/cart'),
                axios.get('http://localhost:4000/favorites'),

            ]);

            setIsLoading(false);
            setItems(itemsResponse.data);
            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);

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
       try  {
           if (cartItems?.find(item => Number(item.id) === Number(obj.id))) {
               axios.delete(`http://localhost:4000/cart/${obj.id}`, obj)
               setCartItems(prev => prev?.filter(item => Number(item.id) !== Number(obj.id)));
           } else {
               axios.post('http://localhost:4000/cart', obj)
               setCartItems((prev) => [...prev, obj]);
           }
       } catch (error){
           alert("Не удалось добавить/удалить из корзины")
       }
    }
    const onAddToFavorites = async (obj) => {
       try {
        if(favorites?.find((favObj) => favObj.id === obj.id)) {
            axios.delete(`http://localhost:4000/favorites/${obj.id}`, obj)
            setFavorites(prev => prev?.filter(item => item.id !== obj.id));
        } else {
            const {data} = await axios.post('http://localhost:4000/favorites', obj)
            setFavorites((prev) => [...prev, data]);
            }
           } catch(error) {
           alert("Не удалось добавить в закладки")
       }
    }
    const onChangeSearchInput = event => {
        setSearchValue(event.target.value);
    }
    const isItemAdded = (id) => {
        return !cartItems?.some((obj) => Number(obj.id) === Number(id))
    }
    const isFavoritesAdded = (id) => {
        return !favorites?.some((obj) => Number(obj.id) === Number(id))
    }




  return (
      <AppContext.Provider value={{cartItems, favorites, searchValue, items, isItemAdded, isFavoritesAdded, onAddToFavorites, setCartOpened, setCartItems}}>
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
                          cartItems={cartItems}
                          isLoading={isLoading}
                      />}>
                      </Route>
                      <Route path="/favorites" element={<Favorites/>}>
                      </Route>
                  </Routes>


              </div>


          </div>
      </AppContext.Provider>
  );
}

export default App;
