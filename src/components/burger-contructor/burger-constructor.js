import styles from './burger-contructor.module.css';
import '../../index.css';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {ingredientType} from "../../utils/types";

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
    const getTotalPrice = () => data.reduce((partSum, elem) => partSum + elem.price, 0);
    const getBun = data.find(elem => elem.type === "bun");

    return (
        <section className={`${styles['burger-constructor']} pt-25 pl-4`}>
            <div className={styles.ingredients}>
                <div className="ml-8">
                    <ConstructorElement
                        key={`${getBun._id}_top`}
                        type="top"
                        text={getBun.name + " (верх)"}
                        thumbnail={getBun.image}
                        price={getBun.price}
                        isLocked={true}
                    />
                </div>

                <div className={`${styles.filings} scrollbar`}>
                    {data.filter(elem => elem.type !== "bun")
                        .map((elem, index) => (
                                <div className={`${styles.container} pr-2`}>
                                    <DragIcon type="primary"/>
                                    <ConstructorElement
                                        key={`${elem._id}_${index}`}
                                        type={getType(index, data.length)}
                                        isLocked={false}
                                        text={elem.name}
                                        price={elem.price}
                                        thumbnail={elem.image}
                                    />
                                </div>
                            )
                        )}
                </div>
                <div className="pl-8">
                    <ConstructorElement
                        key={`${getBun._id}_bottom`}
                        type="bottom"
                        text={getBun.name + " (низ)"}
                        thumbnail={getBun.image}
                        price={getBun.price}
                        isLocked={true}
                    />
                </div>

            </div>

            <div className={`${styles.summary} mt-10`}>
                <div className={`${styles['total-price']} text_type_digits-medium pt-1 pb-1`}>
                    {getTotalPrice()}
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" onClick={openModal}>
                    Оформить заказ
                </Button>
                {modalState.isOpened &&
                <Modal close={closeModal} paddings="pt-30 pb-30">
                    <OrderDetails data={modalState.order}/>
                </Modal>
                }
            </div>

        </section>
    );
}
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired
}
export default BurgerConstructor;