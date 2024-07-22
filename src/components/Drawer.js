

function Drawer({CloseCart, items, onMinus = []}) {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h1 className="d-flex justify-between">
                    Корзина
                    <img className="cu-p" onClick={CloseCart} src="img/deleteItem.svg" alt="delete"/>
                </h1>
                        { items.length > 0 ? (
                            <div className="cart">
                                <div className="items">
                                    {items.map((obj) => (
                                        <div className="cartItem d-flex align-center">
                                            <img id="img_cart" width={70} height={70} src={obj.imageURL}
                                                 alt="sneakers"/>
                                            <div>
                                                <ul>
                                                    <p>{obj.title}</p>
                                                    <b>{obj.price} руб.</b>
                                                </ul>
                                            </div>
                                            <img className="cu-p" onClick={() => onMinus(obj.id)} id="delete"
                                                 src="img/deleteItem.svg" alt="deleteItem"/>
                                        </div>
                                    ))}
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

                        ) : (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img width={120} height={120} src="img/empty-cart.jpg" alt="empty_cart" className="mb-20"/>
                            <h2>Корзина пустая</h2>
                            <span className="opacity-6 m-30 d-flex justify-between text-center ">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
                            <b onClick={CloseCart}
                               className="greenButton d-flex text-center justify-center flex-column">
                                Вернуться назад
                            </b>
                        </div>)
                        }

            </div>
        </div>
    )
}

export default Drawer;