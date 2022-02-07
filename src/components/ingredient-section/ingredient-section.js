import styles from './ingredient-section.module.css';
import IngredientItem from "../ingredient-item/ingredient-item";
import React from "react";
import PropTypes from "prop-types";

const IngredientSection = ({type, data, selectedType, openModal}) => {
    const categories = new Map([
            ["bun", "Булки"],
            ["sauce", "Соусы"],
            ["main", "Начинки"]
        ]
    );
    const mutableRefObject = React.useRef(null);
    React.useEffect(() => {
        if (mutableRefObject.current !== null) {
            if (selectedType === type) {
                mutableRefObject.current.scrollIntoView();
            }
        }
    });
    const getIngredients = () => {
        return data
            .filter(elem => elem.type === type)
            .map((elem) =>
                <IngredientItem data={elem} key={elem._id} openModal={openModal}/>
            );
    }

    return (
        <>
            <h2 ref={mutableRefObject} className="text_type_main-medium">
                {categories.get(type)}
            </h2>
            <div className={`${styles['section']} pt-6 pb-10 pl-4 pr-2`}>
                {getIngredients()}
            </div>
        </>
    );
}
IngredientSection.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
            "_id": PropTypes.string.isRequired,
            "name": PropTypes.string,
            "type": PropTypes.string.isRequired,
            "proteins": PropTypes.number,
            "fat": PropTypes.number,
            "carbohydrates": PropTypes.number,
            "calories": PropTypes.number,
            "price": PropTypes.number,
            "image": PropTypes.string,
            "image_mobile": PropTypes.string,
            "image_large": PropTypes.string,
            "__v": PropTypes.number
        }).isRequired
    ).isRequired,
    openModal: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    selectedType: PropTypes.string.isRequired
};
export default IngredientSection;