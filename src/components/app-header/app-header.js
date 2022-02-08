import React from "react";
import styles from './app-header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header className={`${styles["header-container"]} pt-4 pb-4`}>
            <div className={styles.header}>
                <div className={styles['navigation-block']}>
                    <a className={`${styles['item']} pr-5 pl-5 mr-2`}>
                        <BurgerIcon type="primary"/>
                        <p className="ml-2 text text_type_main-default">
                            Конструктор
                        </p>
                    </a>
                    <a className={`${styles['item']} pr-5 pl-5`}>
                        <ListIcon type="primary"/>
                        <p className="ml-2 text text_type_main-default">
                            Лента заказов
                        </p>
                    </a>
                </div>

                <div className={styles['item_position_center']}>
                    <Logo/>
                </div>

                <a className={`${styles['item']} pr-5 pl-5 ${styles['item_position_end']}`}>
                    <ProfileIcon type="primary"/>
                    <p className="ml-2 text text_type_main-default">Личный кабинет</p>
                </a>
            </div>
        </header>
    );

}

export default AppHeader;