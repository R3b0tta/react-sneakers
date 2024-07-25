import React from 'react'
import Info from '../Info';
import AppContext from "../../context";
import axios from "axios";
import styles from "./Drawer.module.scss";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

function Index({CloseCart, items, onMinus = [], opened}) {
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [orderId, setOrderId] = React.useState(false);
    const {setCartItems, cartItems} = React.useContext(AppContext);
    const tax = Math.round((cartItems?.reduce((sum, obj) => sum + obj.price, 0))*0.05);
    const totalPrice = cartItems?.reduce((sum, obj) => sum + obj.price, 0);

    const onClickOrder = async () => {
       try  {
           const {data} = await axios.post('http://localhost:4000/orders', {items: cartItems});
           setOrderId(data.id)
           setIsCompleted(true);
           setCartItems([]);
           for (let i = 0; i < cartItems.length; i++) {
               const item = cartItems[i];
               await axios.delete(`http://localhost:4000/cart/` + item.id);
               await delay();
           }


       } catch {
           alert("Ошибка при создании заказа :(")
       }
    }
    return (
        <div className={` ${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={`${styles.drawer} d-flex flex-column`}>
                <h1 className="d-flex justify-between">
                    Корзина
                    <img className="cu-p" onClick={CloseCart} src="img/deleteItem.svg" alt="delete"/>
                </h1>
                        { items.length > 0 ? (
                            <div className="cart d-flex flex-column flex">
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
                                            <b>{totalPrice} руб.</b>
                                        </li>
                                        <li className="d-flex align-end">
                                            <span>Налог 5%:</span>
                                            <div></div>
                                            <b>{tax} руб.</b>
                                        </li>
                                        <div className="checkout d-flex justify-center">
                                            <b onClick={onClickOrder} className="d-flex align-center justify-center"> Оформить заказ </b>
                                            <img src="img/arrow.svg" alt="arrow"/>
                                        </div>
                                    </ul>
                                </div>
                            </div>

                        ) : (
                            <Info title={isCompleted ? "Заказ оформлен!": "Корзина пустая"}
                                  description={ isCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`: "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                                  image={isCompleted ? "img/complete-order.jpg" : "img/empty-cart.jpg"} />
                        )
                        }

            </div>
        </div>
    )
}

export default Index;