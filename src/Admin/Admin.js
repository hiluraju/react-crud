import { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { TextField,Button, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

import StudentTable from '../Dashboard/StudentTable';
import { Container } from '@mui/system';
import DataContext from '../Context/DataContext';

const Admin = () => {

  const {setStudents}                = useContext(DataContext);
  const [studentName,setStudentName] = useState('');
  const [studentMark,setStudentMark] = useState('');
  const history = useHistory();

  const handleStudentDataAddition = () =>
  {
    if(studentName && studentMark)
    {
      const newstudentData = {id : Math.random(), name : studentName.trim(), marks : studentMark.trim()}
      const studentData = JSON.parse(localStorage.getItem("students"));
      studentData.push(newstudentData);
      localStorage.setItem('students',JSON.stringify(studentData));
      setStudents(studentData);
      setStudentName('');
      setStudentMark('');
      history.push("/login")
    }
    return;
  }

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
            > Add Student Data</Button>
        </div>
        <br/><br/>
        <div>        
          <StudentTable/>
        </div>
    </Container>
  )

}

export default Admin