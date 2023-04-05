import { fetchContacts } from "redux/operations";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/selectors";




export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading); 
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  
    return (
      <Layout>
        <GlobalStyle/>
        <h1>Phonebook</h1>
        <ContactForm  />

        {isLoading && !error && <b>Request in progress...</b>}
        <h2>Contacts</h2>
          <Filter  />
        <ContactList  />

      </Layout>
    )
  }

