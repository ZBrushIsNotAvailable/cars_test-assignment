import React from "react";
import TableItemContainer from "./TableItemContainer";
import {connect} from "react-redux";
import {deleteCar, editCar} from "../../../store/cars-reducer";

const TableBody = ({cars, editCar, deleteCar}) => {
    console.log(cars)
    return (
        <tbody>
        {cars.map(car =>
             <TableItemContainer key={car.id}
                                 editCar={editCar}
                                 deleteCar={deleteCar}
                                 {...car}
             />
        )}
        </tbody>
    )
}

export default connect(null,{editCar,deleteCar})(TableBody)