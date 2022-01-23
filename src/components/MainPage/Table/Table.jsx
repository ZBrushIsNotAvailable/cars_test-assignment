import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TablePaginator from "./TablePaginator/TablePaginator";

import "./Table.css"

const Table = ({cars}) => {

    const [sortBy, setSortBy] = useState("brand")
    const [amount, setAmount] = useState(0)
    const [pageSize, setPageSize] = useState(5)
    const [last, setLast] = useState(0)

    useEffect(() => setAmount(cars.length), [cars.length])

    const handleHead = (e) => {
        setSortBy(e.target.getAttribute("name"))
    }

    console.log("Table")


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

const mapStateToProps = state => ({cars: state.carsReducer.cars})

export default connect(mapStateToProps)(Table)