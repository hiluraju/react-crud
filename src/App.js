import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'; 
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';

function App() {

  const [showForm,setShowForm]     = useState(false);
  const [username,setUsername]     = useState('');
  const [password,setPassword]     = useState('');
  const [loginerror,setLoginError] = useState(false);

  const history = useHistory();

  useEffect(() =>
  {
    const authentication = {username : "admin",password : "123321"};

    localStorage.setItem('auth',JSON.stringify(authentication));

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
        <Dashboard />
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
