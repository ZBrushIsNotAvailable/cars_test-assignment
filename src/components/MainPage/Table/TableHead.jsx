import React from "react";

import "./Table.css"

const TableHead = () => {
    return (
        <thead className="thead">
        <tr className="tr">
            <th>Brand</th>
            <th>Car Number</th>
            <th>Engine Type</th>
            <th>Model</th>
            <th>Actions</th>
        </tr>
        </thead>
    )
}

export default TableHead