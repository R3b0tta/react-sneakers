import styles from './Card.module.scss'
import React, {Fragment} from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({title, price, imageURL, onPlus, onFavorite, id,  Loading=false}) {
    const {isItemAdded, isFavoritesAdded} = React.useContext(AppContext);
    function ReverseAdded() {
            onPlus({title, imageURL, price, id});
    }
    function ReverseFavoriteAdded() {
        onFavorite({title, imageURL, price, id});

    }
    return (
        <div className={styles.card}>
            {
                Loading ? <ContentLoader
                    speed={2}
                    width={150}
                    height={230}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="101" rx="5" ry="5" width="150" height="15" />
                    <rect x="0" y="125" rx="5" ry="5" width="100" height="15" />
                    <rect x="120" y="154" rx="10" ry="10" width="32" height="32" />
                    <rect x="0" y="-1" rx="10" ry="10" width="150" height="91" />
                    <rect x="0" y="159" rx="5" ry="5" width="80" height="24" />
                </ContentLoader>
                 : (
                        <Fragment>
                            <img onClick={ReverseFavoriteAdded} className="pos-a cu-p"
                                 src={isFavoritesAdded(id) ? "img/unFavorite.svg" : "img/favorite.svg"} alt="unFavorite"/>
                            <img width={133} height={112} src={imageURL} alt="card_sneakers"/>
                            <p>{title}</p>
                            <div className="d-flex align-center justify-between">
                                <div className="d-flex flex-column">
                                    <span className="text-uppercase"> Цена: </span>
                                    <b>{price} руб.</b>
                                    <img onClick={ReverseAdded} width={32} height={32}
                                         src={isItemAdded(id) ? "img/plus.svg" : "img/unPlus.svg"} alt="plus"/>
                                </div>
                            </div>
                        </Fragment>
                    )


            }

        </div>
    )
}

export default Card;