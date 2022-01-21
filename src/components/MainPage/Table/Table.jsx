import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePaginator from "./TablePaginator/TablePaginator";

import "./Table.css"

const Table = ({cars, editCar}) => {
    return (
        <div className="table_wrapper">
            <table className="table">
                <TableHead/>
                <TableBody cars={cars} editCar={editCar}/>
            </table>
            <TablePaginator amount={cars.length}/>
        </div>

    )

}

export default Table