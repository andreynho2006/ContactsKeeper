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
        name: 'Andrei Cirlan',
        email: 'andreynho@gmail.com',
        phone: '999-876-987',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Iasmina Cirlan',
        email: 'iasmina@gmail.com',
        phone: '222-876-987',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Simona Cirlan',
        email: 'simona@gmail.com',
        phone: '999-345-987',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set Curent contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
