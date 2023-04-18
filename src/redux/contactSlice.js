import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { contactsItem: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsItem.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      state.contactsItem = state.contactsItem.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;