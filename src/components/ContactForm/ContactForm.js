import { Formik } from 'formik';
import { Button, ErrorMessage, Field, Form, FormField } from './ContactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

function validateName(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid name';
   }
   return error;
 }
 
 function validateNumber(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(value)) {
     error = 'Invalid number';
   }
   return error;
 }

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

    return (
    <Formik
        initialValues={{ name: "", phone: "" }}
        onSubmit={(values, actions) => {
          const sameName = contacts.find(contact => contact.name.toLowerCase().includes(values.name.toLowerCase()));
          if (sameName) {
            alert(`${values.name} is already in contacts`)
          } else {
            dispatch(addContact(values));
          };
          
          actions.resetForm();
         
            }}>
    {({ errors, touched }) => {
          return (
            <Form>
              <FormField>
                Name
                <Field name="name" type="text" validate={validateName} />
                {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              </FormField>
              <FormField>
                Number
                <Field name="phone" type="tel" validate={validateNumber} />
                {errors.phone && touched.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
              </FormField>

              <Button type="submit">Add contact</Button>
            </Form>
          );
        }}
    </Formik>
  )
}

