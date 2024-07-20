import styles from './Card.module.scss'
import React from "react";
function Card({title, price, imageURL, onPlus, deleteCard}) {
    const [isAdded, setIsAdded] = React.useState(true)
    function ReverseAdded() {
        if (isAdded){
            onPlus({title, imageURL, price});
        }
        setIsAdded(!isAdded)
    }
    return (
        <div className={styles.card}>
            <img className="pos-a" src="img/unliked.svg" alt="unFavorite"/>
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