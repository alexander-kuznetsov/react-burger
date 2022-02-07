import React from "react";
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";


const ModalOverlay = ({children, close}) => {
    return (
        <div className={`${style.overlay}`} onClick={close}>
            {children}
        </div>
    );
};

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired,
};

export default ModalOverlay;