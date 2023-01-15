import { ButtonGroup,Button } from '@mui/material'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Table = ({students,handleDelete}) => {
  return (
    <div className='cen tbl'>        
        { students.length ? ( 
          <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Marks</th>
                  <th>Actions</th>
                  <th></th>
                 </tr>
              </thead>
              <tbody>
                {students.map((s) =>
                (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.marks}</td>
                    <td>
                      <ButtonGroup>
                        <Button variant='contained' color='success' endIcon={<EditIcon/>}><Link to={`/edit/${s.id}`}>Edit</Link></Button>
                        <Button variant='contained' color='error' endIcon={<DeleteIcon/>} onClick={()=>handleDelete(s.id)}>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        ):( <p>No Student Data Avaialable</p>)}
        
    </div>
  )
}

export default Table