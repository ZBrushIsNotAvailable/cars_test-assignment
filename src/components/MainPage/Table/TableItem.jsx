import React, {useState} from "react";
import IconButton from "../../common/IconButton";

import editIco from "../../../resourses/images/edit.svg"
import deleteIco from "../../../resourses/images/delete.svg"
import ModalContainer from "../../Modal/ModalContainer";

const TableItem = ({brand, carNumber, engineType, model, showModal, modalShown, onDelete, hideModal, handleModal}) => {



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
                    onClick={showModal}
                />
                <IconButton
                    alt="delete"
                    iconSrc={deleteIco}
                    classStyle="item-buttons_delete"
                    onClick={onDelete}
                />
                <ModalContainer
                    inputsVal={{brand, carNumber, engineType, model}}
                    title={"EDIT CAR INFORMATION"}
                    shown={modalShown}
                    hideModal={hideModal}
                    onSubmit={handleModal}
                />
            </td>
        </tr>
    )
}

export default TableItem