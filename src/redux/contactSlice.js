import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './api';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActionsWithType = type =>
  extraActions.map(extraActions => extraActions[type]);

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const anySuccessReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('fulfilled')),
        anySuccessReducer
      )
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(...getActionsWithType('rejected')),
        anyRejectedReducer
      ),
});

export const contactsReducer = contactsSlice.reducer;