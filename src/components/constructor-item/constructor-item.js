import styles from "./constructor-item.module.css";
import {CurrencyIcon, DeleteIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredient from "../ingredient-item/ingredient-item.module.css";
import React from "react";

const ConstructorItem = ({itemData}) => {
    const [lft, setLft] = React.useState(1);
    return (
        <div className={styles.container}>
            {lft > 0 && (
                <DragIcon type="primary"/>
            )
            }
            <div className={`${styles.item} ${(lft > 0) &&
            styles['item_active_false']} pl-6 pr-8 pt-4 pb-4`}>
                <div className={styles.container}>
                    <img className={`${styles['item-image']}`} src={itemData.image} alt="Что-то вкусное"/>
                    <p className={`${styles['item-name']} pl-5 pr-5 text_type_main-default`}>{itemData.name} </p>
                </div>

                <div className={styles.container}>
                    <div className={`${ingredient['item-price']} mr-5 text_type_digits-default`}>
                        {itemData.price}
                        <CurrencyIcon type="primary"/>
                    </div>
                    <DeleteIcon type="primary"/>
                </div>

            </div>
        </div>
    );
}

export default ConstructorItem;