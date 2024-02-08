import React, { Component } from "react";
import css from "./Contact.module.css";

class Contact extends Component {
    static defaultProps = { id: "", name: "", number: "", onClick: () => {} };

    render() {
        const { id, name, number, onClick } = this.props;
        return (
            <li className={css.item}>{name}: {number} <button type="button" id={id} onClick={onClick}>Delete</button></li>
        );
    }
}

export default Contact;