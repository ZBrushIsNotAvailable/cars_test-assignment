import React, {useEffect, useState} from "react";
import Button from "../common/Button";
import Table from "./Table/Table";
import {connect} from "react-redux";
import {addCar, getAllCars} from "../../store/cars-reducer";
import ModalContainer from "../Modal/ModalContainer";

import "./MainPage.css"

const MainPage = ({cars, addCar, getAllCars}) => {

    useEffect(() => {
        getAllCars();
    }, [])


    const [modalVisibility, setModalVisibility] = useState(false)

    const showModal = () => setModalVisibility(true)
    const hideModal = () => setModalVisibility(false)

    return (
        <div className="main">
            <div className="content-header">
                <h1 className="main-title">CAR LIST</h1>
                <Button onClick={showModal}>ADD CAR</Button>
            </div>
            <div className="content-body">
                <Table cars={cars}/>
            </div>
            <ModalContainer
                title={"ADD A NEW CAR"}
                shown={modalVisibility}
                hideModal={hideModal}
                onSubmit={addCar}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    cars: state.carsReducer.cars
})
export default connect(mapStateToProps, {addCar, getAllCars})(MainPage)