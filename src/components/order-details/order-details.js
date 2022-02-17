import React from "react";
import styles from './order-details.module.css';
import PropTypes from "prop-types";

const OrderDetails = ({number}) => {
    return (
        <div className={styles.container}>
            <h1 className={`text_type_digits-large margin_zero ${styles.text}`}>{number}</h1>
            <p className={`text_type_main-medium margin_zero pt-8 ${styles.text}`}>Идентификатор заказа</p>
            <img className="pt-15" src={require('./image/done.png')} alt="Индикатор готовности"/>
            <p className={`text_type_main-default margin_zero pt-15 ${styles.text}`}>Ваш заказ начали готовить</p>
            <p className={`text_type_main-default text_color_inactive margin_zero pt-2 ${styles.text}`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>

    );
};
OrderDetails.propTypes = {
    number: PropTypes.number.isRequired
};
export default OrderDetails;