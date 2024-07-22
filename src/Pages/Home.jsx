import React from "react";
import Card from "../components/Card";

export const Home = ({
                         items,
                         searchValue,
                         onChangeSearchInput,
                         onAddToCart
                     }) => {
    return (
        <div>
        <div className="content ml-40 mr-40">
            <div className="d-flex justify-between align-center">
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search"/>
                    <input className="clear" onChange={onChangeSearchInput} placeholder="Поиск..." type="search"/>
                </div>
            </div>
        </div>
    <div className="d-flex flex-wrap justify-center">
        {items
            ?.filter((item) => item.title.toLowerCase().includes(searchValue?.toLowerCase()))
            .map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageURL={item.imageURL}
                    onPlus={(obj) => onAddToCart(obj)}
                    favorited={true}
                />
            ))
        }
    </div>
        </div>
)
}


