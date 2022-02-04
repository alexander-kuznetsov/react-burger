import styles from './ingredient-section.module.css';
import IngredientItem from "../ingredient-item/ingredient-item";
import React from "react";

const IngredientSection = ({type, data, selected}) => {
    const categories = new Map([
            ["bun", "Булки"],
            ["sauce", "Соусы"],
            ["main", "Начинки"]
        ]
    );
    const mutableRefObject = React.useRef(null);
    React.useEffect(() => {
        if (mutableRefObject.current !== null) {
            if (selected === type) {
                mutableRefObject.current.scrollIntoView();
            }
        }
    });
    const getIngredients = () => {
        return data
            .filter(elem => elem.type === type)
            .map((elem) =>
                <IngredientItem data={elem} key={elem._id}/>
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

export default IngredientSection;