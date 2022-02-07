import styles from './modal.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import * as ReactDOM from "react-dom";

const modalElem = document.getElementById("modals");

const Modal = ({opened, close, type, ...props}) => {
    React.useEffect(() => {
        document.addEventListener("keydown", handleEscapeEvent);
        return () => {
            document.removeEventListener("keydown", handleEscapeEvent);
        }
    }, []);
    const handleEscapeEvent = (e) => {
        if (e.key === 'Escape') {
            close();
        }
    };

    function getPaddings(type) {
        if (type === "ingredient") {
            return "pt-10 pl-10 pb-15 pr-10";
        } else if (type === "order") {
            return "pt-30 pb-30";
        } else return "";
    }

    return (ReactDOM.createPortal(
            <ModalOverlay isOpened={opened} close={close}>
                <div className={`${styles.modal} ${getPaddings(type)}`}>
                    {type === 'ingredient' &&
                    <div className={styles.title}>
                        <h1 style={{margin: 0}} className="text_type_main-large text_color_primary">Детали
                            ингредиента</h1>
                    </div>
                    }
                    <button type="button" className={styles["close-icon"]} onClick={close}>
                        <CloseIcon type="primary"/>
                    </button>
                    {props.children}
                </div>
            </ModalOverlay>,
            modalElem
        )
    );
}
Modal.propTypes = {
    close: PropTypes.func.isRequired,
    opened: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};
export default Modal;
