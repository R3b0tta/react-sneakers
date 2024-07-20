

function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h1>Корзина</h1>
                <div className="items d-flex">
                    <div className="cartItem d-flex align-center">
                        <img id="img_cart" width={70} height={70} src="img/sneakers1.jpg" alt="sneakers"/>
                        <div>
                            <ul>
                                <p>Мужские кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </ul>
                        </div>
                        <img id="delete" src="img/deleteItem.svg" alt="deleteItem"/>
                    </div>
                </div>
                <div className="order">
                    <ul>
                        <li className="d-flex align-end">
                            <span>Итого:</span>
                            <div></div>
                            <b>21498 руб.</b>
                        </li>
                        <li className="d-flex align-end">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                        <div className="checkout d-flex justify-center">
                           <b className="d-flex align-center justify-center"> Оформить заказ </b>
                            <img src="img/arrow.svg" alt="arrow"/>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Drawer;