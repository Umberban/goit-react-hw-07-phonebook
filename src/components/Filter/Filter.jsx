import css from './Filter.module.css'
import { useDispatch} from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter =()=>{
    const dispatch = useDispatch();

    const onFilterChange = e => {
        dispatch(filterContacts(e.currentTarget.value.toLowerCase()));
      };
    return(
        <>
<label className={css.label}  for='filter'>
   Search by Name
    </label>
<input
className={css.input}
id="filter"
type="text"
onChange={onFilterChange}
name="filter"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"

/>
</>)
}
