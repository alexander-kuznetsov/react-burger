import React from "react";
import styles from "./nutrition-details.module.css";
import NutritionItem from "../nutrition-item/nutrition-item";
import PropTypes from "prop-types";


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
    data: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired
    }).isRequired
};
export default NutritionDetails;