import React from "react";
import styles from './order-details.module.css';
import {ingredientType} from "../../utils/types";

const OrderDetails = ({data}) => {
    return (
        <div className={styles.container}>
            <h1 className={`text_type_digits-large margin_zero ${styles.text}`}>{data.orderId}</h1>
            <p className={`text_type_main-medium margin_zero pt-8 ${styles.text}`}>Идентификатор заказа</p>
            <img className="pt-15" src={require('./image/done.png')} alt="Индикатор готовности"/>
            <p className={`text_type_main-default margin_zero pt-15 ${styles.text}`}>{data.status}</p>
            <p className={`text_type_main-default text_color_inactive margin_zero pt-2 ${styles.text}`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>

    );
};
OrderDetails.propTypes = {
    data: ingredientType
};
export default OrderDetails;