import styles from './modal.module.css';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import * as ReactDOM from "react-dom";

const modalElem = document.getElementById("modals");

const Modal = ({close, paddings, title, ...props}) => {
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

    return (ReactDOM.createPortal(
            <ModalOverlay close={close}>
                <div className={`${styles.modal} ${paddings}`}>
                    {title &&
                    <div className={styles.title}>
                        <h1 style={{margin: 0}} className="text_type_main-large text_color_primary">
                            {title}
                        </h1>
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
    paddings: PropTypes.string.isRequired,
    title: PropTypes.string
};
export default Modal;
