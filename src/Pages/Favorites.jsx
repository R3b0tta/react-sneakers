import React from "react";
import Card from "../components/Card";
const FavoritesItems = [
    {"title":"Мужские Кроссовки Nike Blazer Mid Suede","price":12999,"imageURL":"img/sneakers1.jpg"},
    {"title":"Мужские Кроссовки Nike Air Max 270","price":12999,"imageURL":"img/sneakers2.jpg"},
    {"title":"Мужские Кроссовки Nike Blazer Mid Suede","price":8499,"imageURL":"img/sneakers3.jpg"},
    {"title":"Кроссовки Puma X Aka Boku Future Rider","price":8999,"imageURL":"img/sneakers4.jpg"}
]
export const Favorites = ( {items, onAddToFavorites} ) => {
    return (
        <div>
            <div className="content ml-40 ">
                <div className="d-flex justify-between align-center">
                    <h1>Мои закладки</h1>
                </div>
                <div className="d-flex flex-wrap flex-row">
                {items?.map((item, index) => (
                        <Card
                            key={index}
                            favorited={false}
                            onFavorite={(obj) => onAddToFavorites(obj)}
                            {...item}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

