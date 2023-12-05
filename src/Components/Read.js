import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {Table, Button} from 'semantic-ui-react'
import { API_URL } from '../Constants.js/URL';
import { useNavigate } from 'react-router-dom';

const Read = () => {

  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const editUser = ({firstname,lastname,id,checked}) => {
    // cookies method we are using here
      localStorage.setItem('ID', id)
      localStorage.setItem('Firstname', firstname)
      localStorage.setItem('Lastname', lastname)
      localStorage.setItem('Checked', checked)

      navigate('/update')

  }

  // const deleteUser = async (id) => {
  //   await axios.delete(`${API_URL}/${id}`)
  //   //until above codes it will remove only we should retrieve again becuase again we call back url below
  //   callGetAPI()
  // }

  //this code filter directly our database
  const deleteUser = async (id) => {
    try {
      // Send the delete request to the server
      await axios.delete(`${API_URL}/${id}`);
  
      // Update the state to remove the deleted user
      setApiData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      // Handle errors, log them, or show a user-friendly message
      console.error('Error deleting user:', error);
    }
  };

  const callGetAPI = async () => {
    // const res = await axios.get("https://656db1b2bcc5618d3c23c277.mockapi.io/user") or

    const res = await axios.get(API_URL)
    // console.log(res.data)
    setApiData(res.data)
  }

  useEffect(() => {
    callGetAPI()
  }, [])
  

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Full name</Table.HeaderCell>
          <Table.HeaderCell>Salary</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
        </Table.Row>
        
      </Table.Header>
      <Table.Body>
        {
          apiData.map(data => (
            <Table.Row key={data.id}>
              <Table.Cell>
                {data.firstname}
            </Table.Cell>
            <Table.Cell>
                {data.lastname}
            </Table.Cell>
            <Table.Cell>
                {data.checked ? "Checked" : "Not Checked"}
            </Table.Cell>
            <Table.Cell>
                <button onClick={() => deleteUser(data.id)}>Delete</button>
            </Table.Cell>
            <Table.Cell>
                <button onClick={() => editUser(data)}>Edit</button>
            </Table.Cell>
            </Table.Row>
          ))
        }
        {/* <Table.Row>
            <Table.Cell>
                Vijaya
            </Table.Cell>
            <Table.Cell>
                kumar
            </Table.Cell>
            <Table.Cell>
                False
            </Table.Cell>
        </Table.Row> */}
      </Table.Body>
          
        
    </Table>
  )
}

export default Read
