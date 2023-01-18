import { useEffect,useContext } from 'react';

import StudentTable from './StudentTable'
import StudentGraph from './StudentGraph'
import DataContext from '../Context/DataContext';
 
const Dashboard = () => {

  const {students,setStudents} = useContext(DataContext);

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
          <StudentTable/>
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