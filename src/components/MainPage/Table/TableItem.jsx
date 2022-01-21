import React from "react";
import IconButton from "../../common/IconButton";

import editIco from "../../../resourses/images/edit.svg"
import deleteIco from "../../../resourses/images/delete.svg"

const TableItem = ({id, brand, carNumber, engineType, model, editCar, deleteCar}) => {

    function onDelete() {
        deleteCar(id)
    }
    function onEdit() {
        editCar(id)
    }

    return (
        <tr>
            <td>{brand}</td>
            <td>{carNumber}</td>
            <td>{engineType}</td>
            <td>{model}</td>
            <td>
                <IconButton
                    alt="edit"
                    iconSrc={editIco}
                    classStyle="item-buttons_edit"
                    onClick={editCar}
                />
                <IconButton
                    alt="delete"
                    iconSrc={deleteIco}
                    classStyle="item-buttons_delete"
                    onClick={onDelete}
                />
            </td>
        </tr>
    )
}

export default TableItem