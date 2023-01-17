import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'; 
import { Container } from '@mui/system';
import '@fontsource/roboto';


import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import EditStudent from './Admin/EditStudent';
import Nav from './Dashboard/Nav';
import Header from './Home/Header';
import Missing from './Home/Missing';

import './App.css';


const App = () => 
{

  const [showForm,setShowForm]               = useState(false);
  const [username,setUsername]               = useState('');
  const [password,setPassword]               = useState('');
  const [loginerror,setLoginError]           = useState(false);
  const [students,setStudents]               = useState([]);
  const [studentName,setStudentName]         = useState('');
  const [studentMark,setStudentMark]         = useState('');
  const [editStudentName,setEditStudentName] = useState('');
  const [editStudentMark,setEditStudentMark] = useState('');

  const history = useHistory();

  const dummyStudents = [ 
                          {id : 1, name : "Student-1", marks : 80},   
                          {id : 2, name : "Student-2", marks : 85},   
                          {id : 3, name : "Student-3", marks : 92}   
                        ];

  useEffect(() =>
  {
    const authentication = {username : "admin",password : "123321"};      
    localStorage.setItem('auth',JSON.stringify(authentication));    
    if(students.length <= 0)
    {
      localStorage.setItem('students',JSON.stringify(dummyStudents));
      setStudents(dummyStudents);
    }
  },[students])

  const handleLogin = () =>
  {    
    const auth = JSON.parse(localStorage.getItem("auth"));
    if(username.trim() == auth.username && password.trim() == auth.password)
    {
      setLoginError(false);
      setUsername('');
      setPassword('');
      history.push("/login")
    }
    else
    {
      setUsername('');
      setPassword('');
      setLoginError(true);
    }
  }

  const handleStudentDataAddition = () =>
  {
    if(studentName && studentMark)
    {
      const newstudentData = {id : Math.random(), name : studentName.trim(), marks : studentMark.trim()}
      const studentData = JSON.parse(localStorage.getItem("students"));
      studentData.push(newstudentData);
      localStorage.setItem('students',JSON.stringify(studentData));
      setStudentName('');
      setStudentMark('');
      history.push("/login")
    }
    return;
  }

  const handleDelete = id =>
  {
    const studentData = JSON.parse(localStorage.getItem("students"));
    const newStudentData = studentData.filter((s) => s.id != id );
    localStorage.setItem('students',JSON.stringify(newStudentData));
    history.push("/login");
  }

  const handleStudentDataEdit = id =>
  {
    if(editStudentName && editStudentMark)
    {
      const updateStudent = {id, name :editStudentName.trim(), marks : editStudentMark.trim()}
      const Studentdata =  JSON.parse(localStorage.getItem("students"));
      const updateStudentdata =  Studentdata.map((s) => s.id == id ? updateStudent : s);
      localStorage.setItem('students',JSON.stringify(updateStudentdata));
      setEditStudentName('');
      setEditStudentMark('');
      history.push("/login");
    }
    return;
  }


  return (
    
    <div className="cen">
      <Header/>
      <Container maxWidth='md'>
        <Switch>
        <Route path="/" exact>
          <Home showForm = {showForm}
                setShowForm = {setShowForm}
                username = {username}
                password = {password}
                setUsername = {setUsername}
                setPassword = {setPassword}
                handleLogin = {handleLogin}
                loginerror  = {loginerror}
                setLoginError = {setLoginError}
                />
        </Route>
        <Route path="/login" exact>
          <Nav/>
          <Dashboard students= {students}
                    setStudents = {setStudents}
                    handleDelete = {handleDelete}
          />
        </Route>      
        <Route path="/admin" exact>
        <Nav/>
          <Admin students= {students}
                  setStudents = {setStudents}
                  studentName = {studentName}
                  setStudentName = {setStudentName}
                  studentMark = {studentMark}
                  setStudentMark = {setStudentMark}
                  handleStudentDataAddition = {handleStudentDataAddition}
                  handleDelete = {handleDelete}
          />
        </Route>
        <Route path="/edit/:id" exact>
        <Nav/>
          <EditStudent editStudentName  = {editStudentName}
                    setEditStudentName = {setEditStudentName}
                    editStudentMark    = {editStudentMark}
                    setEditStudentMark = {setEditStudentMark}
                    handleStudentDataEdit = {handleStudentDataEdit}
          />
        </Route> 
        <Route path="*" component={Missing} />    
        </Switch>   
      </Container>   
    </div>
  );
}

export default App;
