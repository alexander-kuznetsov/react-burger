import styles from './burger-contructor.module.css';
import '../../index.css';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {BurgerConstructorContext} from "../../global-context/burger-constructor-context";

const BurgerConstructor = () => {
    const data = React.useContext(BurgerConstructorContext);
    const [ingredients] = React.useState(data.filter(elem => elem.type !== "bun")
    );

    const [bun] = React.useState(data.find(elem => elem.type === "bun"));
    const [modalState, setModalState] = React.useState({
        isOpened: false,
        number: undefined
    });
    const openModal = () => {
        const orderIds = ingredients.map(elem => elem._id);
        orderIds.push(bun._id)
        orderIds.push(bun._id)
        fetch(
            "https://norma.nomoreparties.space/api/orders",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                        ingredients: orderIds
                    }
                )
            }
        ).then(result => {
            if (!result.ok) {
                return Promise.reject(`Ошибка, статус: ${result.status}.`);
            } else {
                return result.json();
            }
        }).then(json => {
            if (json.success) {
                setModalState({
                    isOpened: true,
                    number: json.order.number
                });
            } else {
                console.log(`Кажется, что-то пошло не так: ${json.message()}`)
            }
        })
    };

    const closeModal = () => {
        setModalState({
            isOpened: false,
            order: {}
        });
    }

    const getTotalPrice = () => ingredients.filter(elem => elem.type !== "bun").reduce((partSum, elem) => partSum + elem.price, 0) + bun.price * 2;

    return (
        <section className={`${styles['burger-constructor']} pt-25 pl-4`}>
            <div className={styles.ingredients}>
                <div className="ml-8">
                    <ConstructorElement
                        type="top"
                        text={bun.name + " (верх)"}
                        thumbnail={bun.image}
                        price={bun.price}
                        isLocked={true}
                    />
                </div>

                <div className={`${styles.filings} scrollbar`}>
                    {ingredients.filter(elem => elem.type !== "bun")
                        .map((elem, index) => (
                            <div className={`${styles.container} pr-2`} key={`${elem._id}_${index}`}>
                                <DragIcon type="primary"/>
                                <ConstructorElement
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
                        type="bottom"
                        text={bun.name + " (низ)"}
                        thumbnail={bun.image}
                        price={bun.price}
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
                    <OrderDetails number={modalState.number}/>
                </Modal>
                }
            </div>

        </section>
    );
}
export default BurgerConstructor;