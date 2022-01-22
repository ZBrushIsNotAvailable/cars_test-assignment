import React, {useEffect, useState} from "react";
import Button from "../common/Button";
import Table from "./Table/Table";
import {connect} from "react-redux";
import {addCar, getAllCars} from "../../store/cars-reducer";
import ModalContainer from "../Modal/ModalContainer";

import "./MainPage.css"

const MainPage = ({getAllCars, addCar}) => {

    useEffect(() => {
        getAllCars();
    }, [])

    const [modalShown, setModalShown] = useState(false)

    const showModal = () => setModalShown(true)
    const hideModal = () => setModalShown(false)
    const handleModal = (e, specs) => {
        e.preventDefault();
        addCar(specs)
        hideModal()
    }

    return (
        <div className="main">
            <div className="content-header">
                <h1 className="main-title">CAR LIST</h1>
                <Button onClick={showModal}>ADD CAR</Button>
            </div>
            <div className="content-body">
                <Table />
            </div>
            <ModalContainer
                title={"ADD A NEW CAR"}
                shown={modalShown}
                hideModal={hideModal}
                onSubmit={handleModal}
            />
        </div>
    )
}


export default connect(null, {getAllCars, addCar})(MainPage)