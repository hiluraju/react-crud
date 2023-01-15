import React from 'react'
import Nav from '../Dashboard/Nav'
import Table from './Table'


const Admin = ({students,setStudents,studentName,setStudentName,studentMark,setStudentMark,handleStudentDataAddition,handleDelete}) => {
  return (
    <div>
        <Nav />
        <div>
            <h4>ADMIN PANEL</h4>
            <p>STUDENT DETAILS</p>
            <input 
              type="text"
              autoFocus
              placeholder='Enter Student Name'
              required
              value={studentName}
              onChange={e=>setStudentName(e.target.value)}
              />
            <br/><br/>
            <input 
              type="number"
              placeholder='Enter Mark'
              required
              value={studentMark}
              onChange={e=>setStudentMark(e.target.value)}
               />
            <br/><br/>
            <button 
              onClick={handleStudentDataAddition}
            >
                Add</button>
        </div>
        <hr/>
        <div>        
          <Table students={students} 
               setStudents = {setStudents}
               handleDelete = {handleDelete}
          />
        </div>
    </div>
  )

}

export default Admin