import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { getContacts, getFilter } from "redux/selectors";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterName = useSelector(getFilter);

    const getVisibleContacts = () => {
        if (filterName !== "") {
           return contacts.filter((contact => contact.name.toLowerCase().includes(filterName.toLowerCase())));
        };
        return contacts;
        
    }
    const visibleContacts = getVisibleContacts();
    
    

    return (
        <ul>
            {visibleContacts.map(contact => (<Contact contact={contact} key={contact.id} />))}
      </ul>
  )  
}


