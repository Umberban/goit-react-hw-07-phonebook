import css from './ContactList.module.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter} from 'redux/selector';

export const ContactList =()=>{
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    let contactsFiltered = contacts;

    if (filter.length > 0) {
      contactsFiltered = contacts.filter(contact =>
       contact.name.toLowerCase().includes(filter.toLowerCase())
     );
    }

    console.log(contactsFiltered)

    return(
        <ul className={css.list}>
            {contactsFiltered.map(({id,name,number})=>(<li className={css.item} key={id}>
                <div>
                <p><b>Name:</b> {name}</p>
                <p><b>Phone:</b> {number}</p>
                </div>
                <button className={css.btn} type='button' onClick={()=>dispatch(deleteContact(id))}>X</button>
            </li>))}
        </ul>
    )
}
// toFix
ContactList.propTypes = {
    contacts: PropTypes.array,
    clickHandler: PropTypes.func
  };