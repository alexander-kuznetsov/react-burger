import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import '../../index.css';
import styles from './burger-ingredients.module.css';
import IngredientSection from "../ingredient-section/ingredient-section";

const BurgerIngredients = (props) => {
    const [current, setCurrent] = React.useState('bun');

    return (
        <section className={styles['burger-ingredient-section']}>
            <h1 className="text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <div className={`${styles.tabs} mb-10`}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={`scrollbar ${styles.sections}`}>
                <IngredientSection data={props.data} type="bun" selected={current}/>
                <IngredientSection data={props.data} type="sauce" selected={current}/>
                <IngredientSection data={props.data} type="main" selected={current}/>
            </div>
        </section>
    );
}

export default BurgerIngredients;