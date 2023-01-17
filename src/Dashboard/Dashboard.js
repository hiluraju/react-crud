import { useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';

import StudentTable from './StudentTable'
import StudentGraph from './StudentGraph'
import DataContext from '../Context/DataContext';
 
const Dashboard = () => {

  const {students,setStudents} = useContext(DataContext);

  const history = useHistory();

  const handleDelete = id =>
  {
    const studentData = JSON.parse(localStorage.getItem("students"));
    const newStudentData = studentData.filter((s) => s.id != id );
    localStorage.setItem('students',JSON.stringify(newStudentData));
    history.push("/login");
  }

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