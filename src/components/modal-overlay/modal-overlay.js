import React from "react";
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";


const ModalOverlay = ({isOpened, children, close}) => {
    return (
        <div className={`${style.overlay} ${isOpened && style.opened}`} onClick={close}>
            {children}
        </div>
    );
};

ModalOverlay.propTypes = {
    isOpened: PropTypes.bool.isRequired,
};

export default ModalOverlay;