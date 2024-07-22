import styles from './Card.module.scss'
import React from "react";
function Card({title, price, imageURL, onPlus, favorited}) {
    const [isAdded, setIsAdded] = React.useState(true)
    const [favoriteIsAdded, setFavoriteIsAdded] = React.useState(favorited)
    function ReverseAdded() {
        if (isAdded){
            onPlus({title, imageURL, price});
        }
        setIsAdded(!isAdded)
    }
    function ReverseFavoriteAdded() {
        setFavoriteIsAdded(!favoriteIsAdded)
    }
    return (
        <div className={styles.card}>
            <img onClick={ReverseFavoriteAdded} className="pos-a cu-p" src={favoriteIsAdded ? "img/unFavorite.svg" : "img/favorite.svg"} alt="unFavorite"/>
            <img width={133} height={112} src={imageURL} alt="card_sneakers"/>
            <p>{title}</p>
            <div className="d-flex align-center justify-between">
                <div className="d-flex flex-column">
                    <span className="text-uppercase"> Цена: </span>
                    <b>{price} руб.</b>
                    <img onClick={ReverseAdded} width={32} height={32} src={isAdded ? "img/plus.svg" : "img/unPlus.svg"} alt="plus"/>
                </div>
            </div>
        </div>
    )
}

export default Card;