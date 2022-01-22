import React, {useEffect, useState} from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePaginator from "./TablePaginator/TablePaginator";

import "./Table.css"

const Table = ({cars}) => {

    const [sortBy, setSortBy] = useState("brand")
    const [amount, setAmount] = useState(0)
    const [pageSize, setPageSize] = useState(5)

    const [last, setLast] = useState(0)

    const pageNumber = ''

    useEffect(() => setAmount(cars.length), [cars.length])

    const handleHead = (e) => {
        setSortBy(e.target.getAttribute("thname"))
    }

    return (
        <div className="table_wrapper">
            <table className="table">
                <TableHead handleHead={handleHead}/>
                <TableBody cars={cars}
                           pageSize={pageSize}
                           last={last}
                           sortBy={sortBy}
                />
            </table>
            <TablePaginator amount={amount}
                            pageSize={pageSize} setPageSize={setPageSize}
                            last={last} setLast={setLast}
            />
        </div>
    )
}

export default Table