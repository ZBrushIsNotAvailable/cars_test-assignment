import React from "react";
import TableItem from "./TableItem";
import {connect} from "react-redux";
import {deleteCar, editCar} from "../../../store/cars-reducer";

const TableBody = ({cars, editCar, deleteCar}) => {
    console.log(cars)
    return (
        <tbody>
        {cars.map(car =>
             <TableItem key={car.id}
                        editCar={editCar}
                        deleteCar={deleteCar}
                        {...car}
             />
        )}
        </tbody>
    )
}

export default connect(null,{deleteCar})(TableBody)