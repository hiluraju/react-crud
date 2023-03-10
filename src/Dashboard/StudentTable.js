import {useContext} from 'react'
import { Link,useLocation,useHistory } from 'react-router-dom'
import { ButtonGroup,Button } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DataContext from '../Context/DataContext';


const StudentTable = () => {

  const {students,setStudents} = useContext(DataContext);
  const history = useHistory();
  const location = useLocation();
  const adminpage = location.pathname === "/admin" ? true : false;

  const handleDelete = id =>
  {
    const newStudentData = students.filter((s) => s.id !== id );    
    localStorage.setItem('students',JSON.stringify(newStudentData));
    setStudents(newStudentData);
    history.push("/login");
  }


  return (
    <div>        
        { students.length > 0 && 
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className='fwb'>STUDENT</TableCell>
                  <TableCell className='fwb'>MARKS</TableCell>
                  { adminpage && 
                    <TableCell className='fwb'>ACTIONS</TableCell>
                  }
                  
                  </TableRow>
              </TableHead>
              <TableBody>
                {students.map((s) => (
                  <TableRow
                    key={s.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" key={s.id}>
                    {s.name}
                    </TableCell>
                    <TableCell>{s.marks}</TableCell>
                    { adminpage && 
                      <TableCell>
                      <ButtonGroup>
                          <Link to={`/edit/${s.id}`} className="tdn"><Button variant='contained' color='success' endIcon={<EditIcon/>}>Edit</Button></Link>
                          <Button variant='contained' color='error' endIcon={<DeleteIcon/>} onClick={()=>handleDelete(s.id)}>Delete</Button>
                        </ButtonGroup>
                      </TableCell>
                    }                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
        }
  
    </div>
  )
}

export default StudentTable