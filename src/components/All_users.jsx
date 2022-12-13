import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material';
import { getUsers ,deleteUser} from '../api/api';
import { Link } from 'react-router-dom'


const StyledTable = styled(Table)`
    width: 90%;
    margin: 90px 0 0 90px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const All_users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersDetails();
  }, []);


  const getUsersDetails = async () => {
    let response = await getUsers();
    // console.log(response.data)
    setUsers(response.data)
  }

  const deleteUserData = async (id) => {
    await deleteUser(id );
    getUsersDetails();
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>



      <TableBody>
        {users.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`}>Edit</Button>
              <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}

export default All_users