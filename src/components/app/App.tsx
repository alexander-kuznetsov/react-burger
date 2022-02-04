import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-contructor/burger-constructor";
import {data} from "../../data";

function App() {

    return (
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.main}>
                <BurgerIngredients data={data}/>
                <BurgerConstructor data={data}/>
            </main>

        </div>
    );
}

export default App;
