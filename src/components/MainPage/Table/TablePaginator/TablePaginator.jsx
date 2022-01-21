import React from "react";

import prev from "../../../../resourses/images/prev.svg"
import next from "../../../../resourses/images/next.svg"

import "./TablePaginator.css"

const TablePaginator = ({amount}) => {

    return (
        <div className="pagination">
            <form className="form">
                <label htmlFor="select" className="form__label">Lines on page:</label>
                <select id={"select"} className="form__select">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </form>
            <p>1-5 out of 5</p>
            <div className="navigation">
                <button className="navigation__btn"><img src={prev} alt="prev"/></button>
                <button className="navigation__btn"><img src={next} alt="next"/></button>
            </div>
        </div>
    )
}

export default TablePaginator