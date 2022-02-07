import styles from './burger-contructor.module.css';
import '../../index.css';
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const BurgerConstructor = ({data}) => {
    const [modalState, setModalState] = React.useState({
        isOpened: false,
        order: {}
    });

    const openModal = () => {
        const elem = {
            orderId: "034536",
            status: "Ваш заказ начали готовить"
        };
        setModalState({
            isOpened: true,
            order: elem
        });
    };

    const closeModal = () => {
        setModalState({
            isOpened: false,
            order: {}
        });
    }

    const getType = (index, length) => {
        switch (index) {
            case 0:
                return "top";
            case (length - 1):
                return "bottom";
        }
    }

    const getTotalPrice = () => {
        return data.reduce((partSum, elem) => partSum + elem.price, 0);
    }

    return (
        <section className={`${styles['burger-constructor']} pt-25 pl-4`}>
            <div className={`${styles.ingredients} scrollbar`}>
                {data
                    .map((elem, index) =>
                        <ConstructorElement
                            key={`${elem._id}_${index}`}
                            type={getType(index, data.length)}
                            isLocked={false}
                            text={elem.name}
                            price={elem.price}
                            thumbnail={elem.image}
                        />
                    )}
            </div>
            <div className={`${styles.summary} mt-10`}>
                <div className={`${styles['total-price']} text_type_digits-medium pt-1 pb-1`}>
                    {getTotalPrice()}
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" onClick={openModal}>
                    Оформить заказ
                </Button>
                {Object.keys(modalState.order.length !== 0) &&
                <Modal opened={modalState.isOpened} close={closeModal} type="order">
                    <OrderDetails data={modalState.order}/>
                </Modal>
                }
            </div>

        </section>
    );
}
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        "_id": PropTypes.string,
        "name": PropTypes.string,
        "type": PropTypes.string,
        "proteins": PropTypes.number,
        "fat": PropTypes.number,
        "carbohydrates": PropTypes.number,
        "calories": PropTypes.number,
        "price": PropTypes.number,
        "image": PropTypes.string,
        "image_mobile": PropTypes.string,
        "image_large": PropTypes.string,
        "__v": PropTypes.number
    }).isRequired).isRequired
}
export default BurgerConstructor;