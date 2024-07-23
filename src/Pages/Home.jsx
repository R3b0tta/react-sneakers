import React from "react";
import Card from "../components/Card";

export const Home = ({
                         items,
                         searchValue,
                         onChangeSearchInput,
                         onAddToCart,
                         onAddToFavorites

                     }) => {
    return (
        <div>
        <div className="content ml-40 ">
            <div className="d-flex justify-between align-center">
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    <input className="clear" onChange={onChangeSearchInput} placeholder="Поиск..." type="search"/>
                </div>
            </div>
        </div>
    <div className="ml-40 d-flex flex-wrap flex-row">
        {items
            ?.filter((item) => item.title.toLowerCase().includes(searchValue?.toLowerCase()))
            .map((item, index) => (
                <Card
                    key={index}
                    {...item}
                    onPlus={(obj) => onAddToCart(obj)}
                    favorited={true}
                    onFavorite={(obj) => onAddToFavorites(obj)}
                />
            ))
        }
    </div>
        </div>
)
}


