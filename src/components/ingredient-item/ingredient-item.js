import React from "react";
import styles from "./ingredient-item.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientItem = ({data}) => {
    const [count, setCount] = React.useState(1);
    return (
        <div className={styles.item}>
            {count !== 0 && (
                <div className={styles['item-counter']}>
                    <Counter count={count} size="default"/>
                </div>
            )}
            <img className={`${styles['item-image']} pl-4 pr-4`} src={data.image} alt="что-то космически вкусное!"/>
            <div className={`${styles['item-price']} text_type_digits-default pt-1 pb-1`}>
                {data.price}
                <CurrencyIcon type="primary"/>
            </div>
            <p className={`${styles['item-name']} text_type_main-default`}>{data.name}</p>
        </div>
    );
};

export default IngredientItem;