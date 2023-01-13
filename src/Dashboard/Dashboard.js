import { Link } from 'react-router-dom'; 

import StudentTable from './StudentTable'
import StudentGraph from './StudentGraph'
import { useEffect } from 'react';

const Dashboard = ({students}) => {

  useEffect(()=>
  {
    // console.log(students); 
  },[])

  return (
    <>
      <div>
        <h4>DASHBOARD</h4> 
        <button><Link to="/admin">LOGIN TO ADMIN PANEL</Link></button> 
      </div>  
      <br/><br/>
      <div>
        <StudentTable students={students}/>
        <br/><br/>
        <StudentGraph students={students}/>
      </div>    
    </>
  )
}

export default Dashboard