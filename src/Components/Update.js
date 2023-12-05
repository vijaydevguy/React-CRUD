import axios from 'axios';
import React , {useState,useEffect}from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from '../Constants.js/URL';
import { useNavigate } from 'react-router-dom';


const Update = () => {

  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [checked,setChecked] = useState(false);
  const [id,setId] = useState('');

  const navigate = useNavigate();

  const edituser = async () => {
    await axios.put(`${API_URL}/${id}`,{
      firstname,
      lastname,
      checked
    });
    navigate('/read')
  }


  useEffect(() =>{
    // console.log(localStorage.getItem('ID'))
    // console.log(localStorage.getItem('Firstname'))
    // console.log(localStorage.getItem('Lastname'))
    // console.log(localStorage.getItem('Checked'))

    setId(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('Firstname'))
    setLastName(localStorage.getItem('Lastname'))
    setChecked(localStorage.getItem('Checked'))

  }, [])

  return (
    <Form className='form'>
      <Form.Field>
        <label> Full Name</label>
        <input placeholder='Enter Full Name' value={firstname}
        onChange={(e) => {setFirstName(e.target.value)}}>
        </input>
      </Form.Field>
      <br />
      <Form.Field>
        <label> Salary</label>
        <input placeholder='Enter Salary' value={lastname}
         onChange={(e) => {setLastName(e.target.value)}}
        >
        </input>
      </Form.Field>
      <br />
      <Form.Field>
        <Checkbox label="Agree the Terms & conditions" checked={checked}
        onChange={() => {setChecked(!checked)}}
        ></Checkbox>
      </Form.Field>
      <br />
      <button onClick={edituser}>Click here to update</button>
    </Form>
  )
}

export default Update
