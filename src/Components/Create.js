import React, { useState } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'
import axios from 'axios'
import { API_URL } from '../Constants.js/URL'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [checked,setChecked] = useState(false);
  const navigate = useNavigate();


  const postData = async() => {
    // console.log(firstname)
    // console.log(lastname)
    // console.log(checked)
    await axios.post(API_URL,{
      firstname,
      lastname,
      checked
    })
    navigate('/read')
  }

  return (
    <Form className='form'>
      <Form.Field>
        <label> First Name</label>
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
      <button onClick={postData}>Submit</button>
    </Form>
  )
}

export default Create
