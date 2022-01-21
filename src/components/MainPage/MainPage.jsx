import React, {useEffect, useState} from "react";
import Button from "../common/Button";
import Table from "./Table/Table";
import {connect} from "react-redux";
import {addCar, deleteCar, editCar, getAllCars} from "../../store/cars-reducer";
import ModalContainer from "../Modal/ModalContainer";

import "./MainPage.css"

const MainPage = ({cars, getAllCars, addCar, editCar, deleteCar}) => {

    useEffect(() => {
        getAllCars();
    }, [])

    // MODAL
    const [addModalVisibility, setAddModalVisibility] = useState(false)
    const [editModalVisibility, setEditModalVisibility] = useState(false)

    const showAddModal = () => setAddModalVisibility(true)
    const hideAddModal = () => setAddModalVisibility(false)
    const showEditModal = (id) => {
        setEditModalVisibility(true)
    }
    const hideEditModal = () => setEditModalVisibility(false)

    const handleAddModal = (e, specs) => {
        e.preventDefault();
        addCar(specs)
        hideAddModal()
    }

    const handleEditModal = (e,specs) => {
        e.preventDefault();
        editCar(specs)
        hideEditModal()
    }


    return (
        <div className="main">
            <div className="content-header">
                <h1 className="main-title">CAR LIST</h1>
                <Button onClick={showAddModal}>ADD CAR</Button>
            </div>
            <div className="content-body">
                <Table cars={cars} editCar={showEditModal} deleteCar={deleteCar}/>
            </div>
            <ModalContainer
                title={"ADD A NEW CAR"}
                shown={addModalVisibility}
                hideModal={hideAddModal}
                onSubmit={handleAddModal}
            />
            <ModalContainer
                title={"EDIT CAR INFORMATION"}
                shown={editModalVisibility}
                hideModal={hideEditModal}
                onSubmit={handleEditModal}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    cars: state.carsReducer.cars
})
export default connect(mapStateToProps, {getAllCars, addCar, editCar, deleteCar})(MainPage)