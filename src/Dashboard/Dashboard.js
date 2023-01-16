import { useEffect } from 'react';
import StudentTable from './StudentTable'
import StudentGraph from './StudentGraph'


const Dashboard = ({students,setStudents,handleDelete}) => {


  useEffect(()=>
  {
    const fetchStudents = () =>
    {
      const studentList = JSON.parse(localStorage.getItem('students'));    
      setStudents(studentList);  
    }
    fetchStudents();


  },[])

  return (
    <>      
      <div>
        <h3>DASHBOARD</h3>  
        {students.length ?
        (
        <>
          <br/><br/>
          <StudentTable students={students} handleDelete={handleDelete}/>
          <br/><br/>
          <StudentGraph students={students}/>
        </>    
        )
        : (
          <h4>Students Data Not Avaialable. Please Add From the 'ADMIN'</h4>
        )}
      </div>    
    </>
  )
}

export default Dashboard