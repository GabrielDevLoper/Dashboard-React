import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import api from '../../services/api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  edit: {
    background: '#56CCF2',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #2F80ED, #56CCF2)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #2F80ED, #56CCF2)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: 'white'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function SimpleTable() {
  const classes = useStyles();
  const [user, setUser] = useState([]);

  async function loadUsers() {
    const response = await api.get('/users');

    const users = response.data;

    setUser(users);
    
  }

  function deleteUser(id) {
    const response = api.delete(`/users/${id}`);

    
  }

  useEffect(() => {
    loadUsers();
  }, [user]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">CPF</TableCell>
           
            <TableCell align="right">Excluir</TableCell>
            <TableCell align="right">Alterar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user._id}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.cpf}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="secondary" onClick={() => deleteUser(user._id)}>
                  <DeleteOutlineIcon />
                </Button>
              </TableCell>
              <TableCell align="right">
              <Button variant="contained" className={classes.edit}>
                  <EditIcon />
              </Button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
