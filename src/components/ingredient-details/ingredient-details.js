import styles from './ingredient-details.module.css';
import NutritionDetails from "../nutrition-details/nutrition-details";
import PropTypes from "prop-types";

const IngredientDetails = ({data}) => {
    return (
        <>
            <div className={styles.content}>
                <img className={styles.image} src={data.image_large} alt="Ингредиент"/>
                <p className="mt-4 mb-8 text_type_main-medium">{data.name}</p>
                <NutritionDetails data={data}/>
            </div>
        </>

    );
};
IngredientDetails.propTypes = {
    data: PropTypes.shape({
        "_id": PropTypes.string,
        "name": PropTypes.string.isRequired,
        "type": PropTypes.string,
        "proteins": PropTypes.number,
        "fat": PropTypes.number,
        "carbohydrates": PropTypes.number,
        "calories": PropTypes.number,
        "price": PropTypes.number,
        "image": PropTypes.string,
        "image_mobile": PropTypes.string,
        "image_large": PropTypes.string.isRequired,
        "__v": PropTypes.number
    }).isRequired
}
export default IngredientDetails;