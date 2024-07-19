import styles from './Card.module.scss'
function Card() {
    return (
        <div className={styles.card}>
            <img className="pos-a" src="img/unliked.svg" alt="unFavorite"/>
            <img width={133} height={112} src="img/sneakers1.jpg" alt="card_sneakers"/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex align-center justify-between">
                <div className="d-flex flex-column">
                    <span className="text-uppercase"> Цена: </span>
                    <b>12 999 руб.</b>
                    <img width={32} height={32} src="img/plus.svg" alt="plus"/>
                </div>
            </div>
        </div>
    )
}

export default Card;