import React, {useState} from "react";
import Button from "../common/Button";
import IconButton from "../common/IconButton";

import "./Modal.css"

import closeIco from "./../../resourses/images/close.svg"

const Modal = ({title, hide, onSubmit}) => {

    const [inputs, setInputs] = useState({
        brand: "",
        model: "",
        number: "",
        engine: "FUEL"
    });

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form id='popup-form' onSubmit={(e) => onSubmit(e, inputs)} className="modal">

            <div className="modal-main">
                <div className="modal__head">
                    <h1>{title}</h1>
                    <IconButton type="reset" iconSrc={closeIco} alt="close-icon" onClick={hide}/>
                </div>

                <div className="modal__content">
                    <input name="brand" placeholder="Brand" value={inputs.brand} onChange={onChange}/>
                    <input name="model" placeholder="Model" value={inputs.model} onChange={onChange}/>
                    <input name="number" placeholder="Car Number" value={inputs.number} onChange={onChange}/>
                    <input name="engine" placeholder="Engine Type" value={inputs.engine}  onChange={onChange}/>
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