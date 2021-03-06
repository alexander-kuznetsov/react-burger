import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import '../../index.css';
import styles from './burger-ingredients.module.css';
import IngredientSection from "../ingredient-section/ingredient-section";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {ingredientType} from "../../utils/types";

const BurgerIngredients = ({data}) => {
    const [currentTab, setCurrentTab] = React.useState('bun');
    const [modalState, setModalState] = React.useState({
        isOpened: false,
        ingredient: null
    });

    const openModal = (elem) => {
        setModalState({
            isOpened: true,
            ingredient: elem
        });
    };

    const closeModal = () => {
        setModalState({
            isOpened: false,
            ingredient: null
        });
    }

    return (
        <section className={styles['burger-ingredient-section']}>
            <h1 className="text_type_main-large mt-10 mb-5">Соберите бургер</h1>
            <div className={`${styles.tabs} mb-10`}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>
            <div className={`scrollbar ${styles.sections}`}>
                <IngredientSection
                    data={data}
                    type="bun"
                    selectedType={currentTab}
                    openModal={openModal}
                />
                <IngredientSection
                    data={data}
                    type="sauce"
                    selectedType={currentTab}
                    openModal={openModal}
                />
                <IngredientSection
                    data={data}
                    type="main"
                    selectedType={currentTab}
                    openModal={openModal}
                />
            </div>
            {modalState.isOpened &&
            <Modal
                title="Детали ингредиента"
                close={closeModal}
                paddings="pt-10 pl-10 pb-15 pr-10">
                <IngredientDetails data={modalState.ingredient}/>
            </Modal>
            }
        </section>
    );
};

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired
}
export default BurgerIngredients;