import { useEffect } from 'react';

import StudentTable from './StudentTable'
import StudentGraph from './StudentGraph'
import Nav from './Nav';


const Dashboard = ({students,setStudents}) => {

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
      <Nav/>      
      <div>
        <h3>DASHBOARD</h3>     
        <br/><br/>
        <StudentTable students={students}/>
        <br/><br/>
        <StudentGraph students={students}/>
      </div>    
    </>
  )
}

export default Dashboard