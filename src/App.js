import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'; 
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
import Admin from './Admin/Admin';

const App = () => 
{

  const [showForm,setShowForm]     = useState(false);
  const [username,setUsername]     = useState('');
  const [password,setPassword]     = useState('');
  const [loginerror,setLoginError] = useState(false);
  const [students,setStudents]     = useState([]);

  const history = useHistory();

  useEffect(() =>
  {
    const authentication = {username : "admin",password : "123321"};

    const dummyStudents = [ 
      {id : 1, name : "Student-1", marks : 80},   
      {id : 2, name : "Student-2", marks : 85},   
      {id : 3, name : "Student-3", marks : 92}   
    ];
    
    localStorage.setItem('auth',JSON.stringify(authentication));    
    localStorage.setItem('students',JSON.stringify(dummyStudents));
    
    setStudents(dummyStudents);

  },[])

  const handleLogin = () =>
  {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if(username == auth.username && password == auth.password)
    {
      setLoginError(false);
      console.log("Login success")
      history.push("/login")
    }
    else
    {
      setLoginError(true);
    }
  }


  return (
    <div className="cen">
      <h2>REACT CRUD</h2>
      <hr/>
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
              />
      </Route>
      <Route path="/login" exact>
        <Dashboard students= {students}
                   setStudents = {setStudents}
        />
      </Route>      
      <Route path="/admin" exact>
        <Admin students= {students}
                setStudents = {setStudents}
        />
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
