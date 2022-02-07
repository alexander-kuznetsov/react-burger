import React from "react";
import styles from "./nutrirtion-item.module.css";
import PropTypes from "prop-types";

const NutritionItem = ({name, value}) => {
    return (
        <div>
            <p className={`${styles['nutrition-name']} text_type_main-default text_color_inactive`}>{name}</p>
            <p className={`${styles['nutrition-value']} text_type_digits-default text_color_inactive`}>{value}</p>
        </div>
    );
};
NutritionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
};
export default NutritionItem;