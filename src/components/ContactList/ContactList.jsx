import React, { Component } from "react";
import Contact from "components/Contact/Contact";

class ContactList extends Component {
    static defaultProps = { contacts: [], filter: "", onClick: () => {} };

    render() {
        const { contacts, filter, onClick } = this.props;
        return (
            <ul>
                {contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())).map(filteredContact => {
                    return (
                        <Contact key={filteredContact.id} id={filteredContact.id} name={filteredContact.name} number={filteredContact.number} onClick={onClick} />
                    );
                })}
            </ul>
        )
    }
}

export default ContactList;