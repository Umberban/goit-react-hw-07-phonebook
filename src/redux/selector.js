export const getContacts = state => state.contacts.items;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  let filteredContacts = contacts;
  if (filter.length > 0) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return filteredContacts;
};