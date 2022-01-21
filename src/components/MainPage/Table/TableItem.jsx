import React from "react";

const TableItem = ({brand, number, engine, model}) => {
    return (
        <tr>
            <td>{brand}</td>
            <td>{number}</td>
            <td>{engine}</td>
            <td>{model}</td>
            <td>
                <button><img alt="edit"/></button>
                <button><img alt="delete"/></button>
            </td>

        </tr>
    )
}

export default TableItem