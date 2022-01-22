import React from "react";

import "./Table.css"

const TableHead = ({handleHead}) => {

    return (
        <thead className="thead">
        <tr className="tr">
            <th thname="brand" onClick={handleHead}>Brand</th>
            <th thname="carNumber" onClick={handleHead}>Car Number</th>
            <th thname="engineType" onClick={handleHead}>Engine Type</th>
            <th thname="model" onClick={handleHead}>Model</th>
            <th>Actions</th>
        </tr>
        </thead>
    )
}

export default TableHead