import styles from './ingredient-details.module.css';
import NutritionDetails from "../nutrition-details/nutrition-details";
import React from "react";
import {ingredientType} from "../../utils/types";

const IngredientDetails = ({data}) => {
    return (
        <div className={styles.content}>
            <img className={styles.image} src={data.image_large} alt="Ингредиент"/>
            <p className="mt-4 mb-8 text_type_main-medium">{data.name}</p>
            <NutritionDetails data={data}/>
        </div>
    );
};
IngredientDetails.propTypes = {
    data: ingredientType
}
export default IngredientDetails;