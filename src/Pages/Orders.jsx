import React from "react";
import Card from "../components/Card";
import  AppContext  from "../context";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const {onAddToCart, onAddToFavorites} = React.useContext(AppContext);
    React.useEffect(() => {
        (async () => {
            try {
                const allItems = [];
                const { data } = await axios.get('http://localhost:4000/orders');

                data.forEach(order => {
                    // Собираем элементы из числовых ключей
                    for (let key in order) {
                        if (order.hasOwnProperty(key) && !isNaN(key)) {
                            allItems.push(order[key]);
                        }
                    }
                    // Собираем элементы из массива items
                    if (order.items) {
                        allItems.push(...order.items);
                    }
                });

                setOrders(allItems);
            } catch (error) {
                alert("Ошибка загрузки заказов");
            }
        })();
    }, []);
    console.log(orders);
    return (
        <div>
            <div className="content ml-40 ">
                <div className="d-flex justify-between align-center">
                    <h1>Мои заказы</h1>
                </div>
                <div className="d-flex flex-wrap flex-row">
                    {(isLoading ? [...Array(8)] : orders)?.map((item, index) => (
                        <Card
                            key={index}
                            {...item}
                            onPlus={(obj) => onAddToCart(obj)}
                            favorited={true}
                            onFavorite={(obj) => onAddToFavorites(obj)}
                            Loading={isLoading}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Orders;

