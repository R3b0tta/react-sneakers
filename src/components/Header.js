import React from "react";

function Header(props) {
    return (
        <div className="d-flex justify-between">
        <div className="header d-flex justify-between">
                <div className="left_side">
                    <img src="img/logotype.svg" width={40} height={40} alt="logotype"/>
                    <ul className="clear">
                        <li className="text-uppercase fw-bold">React Sneakers</li>
                        <li id="niz">Магазин лучших кроссовок</li>
                    </ul>
                </div>
                <div className="right_side d-flex justify-between">
                    <span onClick={props.OpenCart} className="cu-p">
                    <img src="img/cart.svg" alt="cart"/>
                    </span>
                    <p onClick={props.OpenCart} className="cu-p">
                        1205 руб.
                    </p>
                    <span>
                    <img src="img/favorite.svg" alt="favorite"/></span>
                    <p>Закладки</p>
                    <span>
                    <img src="img/profile.svg" alt="profile"/>
                    </span>
                </div>
        </div>
        </div>
    );
}

export default Header;
