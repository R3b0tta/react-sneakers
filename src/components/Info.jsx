import React from 'react';
import AppContext from "../context";

function Info({title, description, image}) {
    const {setCartOpened} = React.useContext(AppContext);

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img width={120} height={120} src={image} alt="empty_cart" className="mb-20"/>
            <h2>{title}</h2>
            <span className="opacity-6 m-30 d-flex justify-between text-center ">{description}</span>
            <b onClick={() => setCartOpened(false)}
               className="greenButton d-flex text-center justify-center flex-column">
                Вернуться назад
            </b>
        </div>
    )
}
export default Info;