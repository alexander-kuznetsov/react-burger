import React from "react";
import styles from './order-details.module.css';
import PropTypes from "prop-types";

const OrderDetails = ({data}) => {
    return (
        <div className={styles.container}>
            <h1 style={{margin: 0}} className="text_type_digits-large">{data.orderId}</h1>
            <p style={{margin: 0}} className="text_type_main-medium pt-8">Идентификатор заказа</p>
            <img style={{margin: 0}} className="pt-15" src={require('./image/done.png')} alt="Индикатор готовности"/>
            <p style={{margin: 0}} className="text_type_main-default pt-15">{data.status}</p>
            <p style={{margin: 0}} className="text_type_main-default text_color_inactive pt-2">Дождитесь готовности на
                орбитальной станции</p>
        </div>

    );
};
OrderDetails.propTypes = {
    data: PropTypes.object
};
export default OrderDetails;