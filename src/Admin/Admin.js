import { TextField,Button, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StudentTable from '../Dashboard/StudentTable';



const Admin = ({students,setStudents,studentName,setStudentName,studentMark,setStudentMark,handleStudentDataAddition,handleDelete,}) => {
  return (
    <div>
        <div>
            <br/>
            <Typography variant='h5'>ADMIN PANEL</Typography>
            <br/>
            <Typography variant='h6'>NEW STUDENT DETAILS</Typography>
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
    </div>
  )

}

export default Admin