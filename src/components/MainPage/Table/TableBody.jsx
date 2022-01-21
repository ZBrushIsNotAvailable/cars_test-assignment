import React from "react";
import TableItem from "./TableItem";

const TableBody = ({cars}) => {
    return (
        <tbody>
            {cars.map(car => {
                return <TableItem {...car}/>
            })}
        </tbody>
    )
}

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default TableBody