import {ContactForm} from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selector';
import { LoadTable } from "./LoadTable/LoadTable";
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <>
      <h1>Phonebook</h1>
    <ContactForm/>
    <Filter/>
    {isLoading && !error && <LoadTable></LoadTable>}
      {error && <b>{error}</b>}
    <ContactList/>
    <ToastContainer autoClose={1500} />
      </>
    );
  };
