import css from './ContactForm.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addContact } from 'redux/contactSlice';
import {getContacts} from 'redux/selector'
export const ContactForm =()=> {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

 const handlerSumbit = e =>{
    e.preventDefault();
    // console.log(contacts[0].name=== name);
    setName(e.target.name.value);
    setNumber(e.target.number.value)
    if (contacts.some(item => item.name === name)) {
      alert( "This contact already exists" );
      return;
    }



    dispatch(addContact(name,number));
    setNumber('')
    setName('')
  }
 const handleChange = evt => {
    if(evt.target.name==='name'){
      setName(evt.target.value)
     }
    else if(evt.target.name==='number'){
      setNumber(evt.target.value)
    }
  };

  // workflow nadoel
return(
    <form className={css.form} onSubmit={handlerSumbit}>
    <label className={css.label} for="name">
        Name
        </label>
    <input
  type="text"
  id="name"
  onChange={handleChange}
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<label className={css.label} for="number">
  Phone number
  </label>
<input
  onChange={handleChange}
  type="tel"
  id="number"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  <button type="submit" className={css.btn}>ADD</button>
  </form>
)

}
