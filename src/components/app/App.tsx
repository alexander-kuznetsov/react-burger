import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-contructor/burger-constructor";

function App() {
    const url = "https://norma.nomoreparties.space/api/ingredients";
    const [ingredients, setIngredients] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchData = () => {
        fetch(url)
            .then(result => {
                if (!result.ok) {
                    setIsLoading(false);
                    throw Error("There was an error while data loading!");
                } else {
                    return result.json();
                }
            })
            .then(result => {
                setIngredients(result.data);
                setIsLoading(false);
            }).catch(err => console.log(err));
    };

    React.useEffect(() => {
        setIsLoading(true);
        fetchData();
        console.log(isLoading);
    }, []);

    return (ingredients &&
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients data={ingredients}/>
                <BurgerConstructor data={ingredients}/>
            </main>
        </div>
    );
}

export default App;
