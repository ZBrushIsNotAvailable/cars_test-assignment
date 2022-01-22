import React, {useState} from "react";
import TableItem from "./TableItem";

const TableItemContainer = ({editCar, deleteCar, ...car}) => {

    const [modalShown, setModalShown] = useState(false)

    const showModal = () => setModalShown(true)
    const hideModal = () => setModalShown(false)
    const handleModal = (e, specs) => {
        e.preventDefault();
        editCar(car.id, specs)
        hideModal()
    }

    const onDelete = () => deleteCar(car.id)

    return (
        <TableItem
            brand={car.brand}
            model={car.model}
            carNumber={car.carNumber}
            engineType={car.engineType}
            modalShown={modalShown}
            onDelete={onDelete}
            showModal={showModal}
            hideModal={hideModal}
            handleModal={handleModal}
        />
    )
}

export default TableItemContainer