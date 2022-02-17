import React from "react";
import styles from "./nutrition-details.module.css";
import NutritionItem from "../nutrition-item/nutrition-item";
import {ingredientType} from "../../utils/types";


const NutritionDetails = ({data}) => {
    return (
        <div className={styles.nutrition}>
            <NutritionItem name="Калории,ккал" value={data.calories}/>
            <NutritionItem name="Белки, г" value={data.proteins}/>
            <NutritionItem name="Жиры, г" value={data.fat}/>
            <NutritionItem name="Углеводы, г" value={data.carbohydrates}/>
        </div>
    );
};

NutritionDetails.propTypes = {
    data: ingredientType
};
export default NutritionDetails;