import styles from './burger-contructor.module.css';
import '../../index.css';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ConstructorItem from "../constructor-item/constructor-item";

const BurgerConstructor = (props) => {
    return (
        <section className={`${styles['burger-constructor']} pt-25 pl-4`}>
            <ul className={`${styles.ingredients} scrollbar`}>
                {props.data
                    .map(elem => <ConstructorItem itemData={elem}/>
                    )}
            </ul>
            <div className={`${styles.summary} mt-10`}>
                <div className={`${styles['total-price']} text_type_digits-medium pt-1 pb-1`}>
                    1000
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>

        </section>
    );
}

export default BurgerConstructor;