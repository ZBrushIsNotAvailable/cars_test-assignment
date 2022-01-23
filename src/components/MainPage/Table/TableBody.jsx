import React from "react";
import {connect} from "react-redux";
import {deleteCar, editCar} from "../../../store/cars-reducer";
import TableItemContainer from "./TableItemContainer";

const TableBody = ({cars, sortBy, pageSize, last, editCar, deleteCar}) => {

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