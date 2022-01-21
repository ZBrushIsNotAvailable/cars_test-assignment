import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePaginator from "./TablePaginator/TablePaginator";

import "./Table.css"

const Table = ({cars}) => {
    return (
        <div className="table_wrapper">
            <table className="table">
                <TableHead/>
                <TableBody cars={cars}/>
            </table>
            <TablePaginator cars={cars}/>
        </div>

    )

}

export default Table