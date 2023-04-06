import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectVisibleContacts } from "redux/selectors";


export const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);
    
    

    return (
        <ul>
            {visibleContacts.map(contact => (<Contact contact={contact} key={contact.id} />))}
      </ul>
  )  
}


