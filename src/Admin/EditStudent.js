import React, { useEffect,useState } from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';


const EditStudent = () => {
 
    const {id} = useParams();
    const history = useHistory();

    const [editStudentName,setEditStudentName] = useState('');
    const [editStudentMark,setEditStudentMark] = useState('');

  useEffect(()=>
  {
    const studentData = JSON.parse(localStorage.getItem("students"));
    const specificStudentData = studentData.filter((s) => s.id.toString() === id)
    setEditStudentName(specificStudentData[0].name);
    setEditStudentMark(specificStudentData[0].marks);
  },[id])

  const handleStudentDataEdit = id =>
  {
    if(editStudentName && editStudentMark)
    {
      const updateStudent = {id, name :editStudentName.trim(), marks : editStudentMark.trim()}
      const Studentdata =  JSON.parse(localStorage.getItem("students"));
      const updateStudentdata =  Studentdata.map((s) => s.id.toString() === id ? updateStudent : s);
      localStorage.setItem('students',JSON.stringify(updateStudentdata));
      setEditStudentName('');
      setEditStudentMark('');
      history.push("/login");
    }
    return;
  }

  return (
    <>
        <div>
            <h3>UPDATE STUDENT DETAILS</h3>
            <input 
              type="text"
              autoFocus
              placeholder='Enter Student Name'
              required
              value={editStudentName}
              onChange={e=>setEditStudentName(e.target.value)}
              />
            <br/><br/>
            <input 
              type="number"
              placeholder='Enter Mark'
              required
              value={editStudentMark}
              onChange={e=>setEditStudentMark(e.target.value)}
               />
            <br/><br/>
            <Button 
              endIcon={<EditIcon/>}
              variant='contained'
              color='info'
              onClick={()=>handleStudentDataEdit(id)}
            > Update</Button>
        </div>
    </>
  )
}

export default EditStudent