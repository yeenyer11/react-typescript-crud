import {FC} from 'react'
import { Action,Contact } from '../reducer/contactsReducer'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'

interface ExtarProps{
  handleEdit: (id:number)=>void;
  dispatch: React.Dispatch<Action>
}



const Contactitem: FC<Contact & ExtarProps>=({id,firstName,lastName,phone,handleEdit,dispatch})=> {
  return (
    <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{phone}</td>
    <td><AiFillEdit size={20} className='icon' onClick={()=>handleEdit(id)}/></td>
    <td><AiFillDelete size={20} className='icon' onClick={()=>{
      const confirmDelete = window.confirm(`Are tou sure you want to delete contact for user ${firstName} ${lastName}?`)
      if(confirmDelete){
        dispatch({
          type: "DELETE_CONTACT",
          payload:{id}
        })
 
      }
    }} /></td>
    </tr>
  )

}

export default Contactitem