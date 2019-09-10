import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'john judy',
        email: 'john@gmail.com',
        phone: '713-456-7890',
        type: 'personal'
      },
      {
        id: 2,
        name: 'john jud',
        email: 'john1@gmail.com',
        phone: '713-456-6890',
        type: 'professional'
      },
      {
        id: 3,
        name: 'john jody',
        email: 'john2@gmail.com',
        phone: '713-456-7490',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id=uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  //Delete Contact

  //Set current contact

  //Clear currnt contact

  // update contact

  //filter contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
