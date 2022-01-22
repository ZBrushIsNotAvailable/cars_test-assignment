import React from "react";

import "./Table.css"

const TableHead = ({handleHead}) => {

    return (
        <thead className="thead">
        <tr className="tr">
            <th name="brand" onClick={handleHead}>Brand
                {/*<IconButton iconSrc={arrowIco} alt="arrow-icon" classStyle="th-icon"/>*/}
            </th>
            <th name="carNumber" onClick={handleHead}>Car Number</th>
            <th name="engineType" onClick={handleHead}>Engine Type</th>
            <th name="model" onClick={handleHead}>Model</th>
            <th>Actions</th>
        </tr>
        </thead>
    )
}

export default TableHead