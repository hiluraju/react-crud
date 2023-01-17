import { TextField,Button, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StudentTable from '../Dashboard/StudentTable';
import { Container } from '@mui/system';




const Admin = ({students,setStudents,studentName,setStudentName,studentMark,setStudentMark,handleStudentDataAddition,handleDelete,}) => {
  return (
    <Container>
        <div>
            <br/>
            <h3>ADMIN PANEL</h3>
            <br/>
            <Typography variant='body2' className='fwb'>NEW STUDENT DETAILS</Typography>
            <br/>
            <TextField 
              variant='outlined'
              type="text"
              autoFocus
              placeholder='Enter Student Name'
              required
              value={studentName}
              onChange={e=>setStudentName(e.target.value)}
              />
            <br/><br/>
            <TextField 
              variant='outlined'
              type="number"
              placeholder='Enter Mark'
              required
              value={studentMark}
              onChange={e=>setStudentMark(e.target.value)}
               />
            <br/><br/>
            <Button variant='contained'
              color='info'
              onClick={handleStudentDataAddition}
              endIcon={<AddCircleIcon/>}
            >
            Add Student Data</Button>
        </div>
        <br/><br/>
        <div>        
          <StudentTable students={students} 
               setStudents = {setStudents}
               handleDelete = {handleDelete}
          />
        </div>
    </Container>
  )

}

export default Admin