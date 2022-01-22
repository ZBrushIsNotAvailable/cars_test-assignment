import React from "react";

import Button from "../common/Button";
import IconButton from "../common/IconButton";

import closeIco from "./../../resourses/images/close.svg"

import "./Modal.css"

const Modal = ({inputs, title, hide, onInputsChange, onFormSubmit}) => {

    return (
        <form id='popup-form' onSubmit={onFormSubmit} className="modal">

            <div className="modal-main">
                <div className="modal__head">
                    <h1>{title}</h1>
                    <IconButton type="reset" iconSrc={closeIco} alt="close-icon" onClick={hide}/>
                </div>

                <div className="modal__content">
                    <input name="brand" placeholder="Brand" value={inputs.brand} onChange={onInputsChange}/>
                    <input name="model" placeholder="Model" value={inputs.model} onChange={onInputsChange}/>
                    <input name="carNumber" placeholder="Car Number" value={inputs.carNumber} onChange={onInputsChange}/>
                    <input name="engineType" placeholder="Engine Type" value={inputs.engineType} onChange={onInputsChange}/>
                </div>

                <div className="modal__buttons">
                    <Button type="reset" onClick={hide} filled={false}>CANCEL</Button>
                    <Button form='popup-form' type="submit">OK</Button>
                </div>

            </div>
        </form>
    )
}

export default Modal