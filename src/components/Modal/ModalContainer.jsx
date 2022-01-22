import React, {useState} from "react";
import Modal from "./Modal";

const ModalContainer = ({inputsVal, title, shown, hideModal, onSubmit}) => {

    const [inputs, setInputs] = useState(inputsVal || {
        brand: "",
        model: "",
        carNumber: "",
        engineType: "FUEL"
    });


    if(!shown) return null

    const handleInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        console.log("iputs",inputs)
    }

    const handleForm = (e) => onSubmit(e, inputs)

    return (
        <Modal
            title={title}
            hide={hideModal}
            inputs={inputs}
            onFormSubmit={handleForm}
            onInputsChange={handleInputs}
        />
    )
}

export default ModalContainer