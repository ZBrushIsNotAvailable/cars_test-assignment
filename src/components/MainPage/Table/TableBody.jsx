import React, {useState} from "react";
import TableItemContainer from "./TableItemContainer";
import {connect} from "react-redux";
import {deleteCar, editCar} from "../../../store/cars-reducer";

const TableBody = ({cars, sortBy, pageSize, last, editCar, deleteCar}) => {

    console.log("last, pageSize", last, pageSize);
    console.log("SORT", sortBy);

    return (
        <tbody>
        {cars
            .slice()
            .sort((a, b) => {
                if (a[sortBy] < b[sortBy])
                    return 1
            })
            .slice(last, last + pageSize)
            .map((car) =>
                <TableItemContainer key={car.id}
                                    editCar={editCar}
                                    deleteCar={deleteCar}
                                    {...car}
                />
            )}
        </tbody>
    )
}

export default connect(null, {editCar, deleteCar})(TableBody)