import React from "react";
import Card from "../components/Card";
import  AppContext  from "../context";

export const Favorites = () => {
    const {favorites, onAddToFavorites} = React.useContext(AppContext);
    return (
        <div>
            <div className="content ml-40 ">
                <div className="d-flex justify-between align-center">
                    <h1>Мои закладки</h1>
                </div>
                <div className="d-flex flex-wrap flex-row">
                {favorites?.map((item, index) => (
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

