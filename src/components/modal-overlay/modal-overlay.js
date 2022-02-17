import React from "react";
import style from './modal-overlay.module.css';
import PropTypes from "prop-types";


const ModalOverlay = ({children, close}) => {
    const onOverlayClick = (e) => {
        const className = e.target.className;
        if (typeof className === 'string' && className.startsWith("modal-overlay")) {
            e.stopPropagation();
            close();
        }
    }
    return (
        <div className={`${style.overlay}`} onClickCapture={onOverlayClick}>
            {children}
        </div>
    );
};

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default ModalOverlay;