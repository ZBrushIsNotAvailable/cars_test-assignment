import React from "react";
import Modal from "./Modal";


const ModalContainer = ({title, shown, hideModal, onSubmit}) => {

    if (!shown)
        return null

    return (
        <Modal
            title={title}
            hide={hideModal}
            onSubmit={onSubmit}
        />
    )
}

export default ModalContainer