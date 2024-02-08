import React, { Component } from "react";
import css from "./Filter.module.css";

class Filter extends Component {
    static defaultProps = { onChange: () => { } };

    render() {
        const { onChange } = this.props;
        return (
            <div className={css.filter}>
                <label htmlFor="filter">Find contacts by name</label>
                <input type="text" id="filter" name="filter" onChange={onChange} />
            </div>
        );
    }
}

export default Filter;