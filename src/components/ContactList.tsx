import {FC} from 'react'
import { Action, Contact } from '../reducer/contactsReducer'
import Contactitem from './Contactitem';
interface ContactListProps{
    contacts:Contact[];
    handleEdit: (id:number)=>void;
    dispatch: React.Dispatch<Action>;
}
const ContactList:FC <ContactListProps>=({contacts,handleEdit,dispatch})=> {
  return (
    <div className='contact-list'>
    <h3 className='contacts-list-title'></h3>
    <div className="contacts-list-table-container">
        <table className="contacts-list-table">
        <thead className='contacts-list-header'>
            <tr>
                <th>Firt Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((props) => (
                <Contactitem key={props.id} {...props} handleEdit={handleEdit} dispatch={dispatch}
                />
            ))}
        </tbody>
        </table>
    </div>
    </div>
  )
}

export default ContactList