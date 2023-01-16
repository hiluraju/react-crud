import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';

const EditStudent = ({editStudentName,setEditStudentName,editStudentMark,setEditStudentMark,handleStudentDataEdit}) => {
 
    const {id} = useParams();

  useEffect(()=>
  {
    const studentData = JSON.parse(localStorage.getItem("students"));
    const specificStudentData = studentData.filter((s) => s.id == id)
    setEditStudentName(specificStudentData[0].name);
    setEditStudentMark(specificStudentData[0].marks);
  },[])

  return (
    <>
        <div>
            <p>UPDATE STUDENT DETAILS</p>
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
            >
                Update</Button>
        </div>
    </>
  )
}

export default EditStudent