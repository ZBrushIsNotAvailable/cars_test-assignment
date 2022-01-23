import React from "react";
import IconButton from "../../../common/IconButton";

import prevIco from "../../../../resourses/images/prev.svg"
import nextIco from "../../../../resourses/images/next.svg"

import "./TablePaginator.css"

const TablePaginator = ({amount, pageSize, setPageSize, last, setLast}) => {

    console.log("Paginator")

    const onAmountSelect = e => {
        setPageSize(Number(e.target.value))
    }

    const toPrevPage = () => {
        if ((last - pageSize) > 0)
            setLast(last - pageSize);
        else
            setLast(0)
    }

    const toNextPage = () => {
        if ((last + pageSize) < amount)
            setLast(last + pageSize);
    }

    const paragraphContent = () => {
        const second = (last + pageSize) > amount ? amount : last + pageSize
        return `${last + 1}-${second} out of ${amount}`
    }


    return (
        <div className="pagination">
            <form className="form">
                <label htmlFor="select" className="form__label">Lines on page:</label>
                <select id={"select"} className="form__select" onChange={onAmountSelect}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </form>
            <p>{paragraphContent()}</p>
            <div className="navigation">
                <IconButton iconSrc={prevIco} alt="prev-icon" classStyle="navigation__btn" onClick={toPrevPage}/>
                <IconButton iconSrc={nextIco} alt="next-icon" classStyle="navigation__btn" onClick={toNextPage}/>
            </div>
        </div>
    )
}

export default TablePaginator