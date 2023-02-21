import React, { useEffect,useState } from 'react'
import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useHistory } from 'react-router-dom';

const Home = () => {
  
const [showForm,setShowForm] = useState(false);
const [username,setUsername] = useState('');
const [password,setPassword] = useState('');
const [loginerror,setLoginError] = useState(false);

const history = useHistory();
  
  useEffect(() =>
  {
    setLoginError(false);
  },[username,password])

  const handleLogin = () =>
  {    
    const auth = JSON.parse(localStorage.getItem("auth"));
    if(username.trim() === auth.username && password.trim() === auth.password)
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

  

  return (
    <> 
    {!showForm && 
        <div>
            <Button 
            variant='contained'
            color='secondary'
            endIcon={<LoginIcon/>}
            onClick={()=>setShowForm(!showForm)}>Click For Login</Button>
        </div>
    }
    
    { showForm && 
        <div>
            <TextField 
              type="text"
              autoFocus
              label='Enter Username'
              required
              value={username}
              onChange={e=>setUsername(e.target.value)}
              />
            <br/><br/>
            <TextField 
              type="password"
              label='Enter Password'
              required
              value={password}
              onChange={e=>setPassword(e.target.value)}
              />
            <br/><br/>
            <Button
            endIcon={<LockOpenIcon/>}
            variant='contained'
            color='primary' 
            onClick={handleLogin}>Login</Button>
            <br/><br/>
            {loginerror && 
             <h4 className='red'>Login Credentials are Wrong.Please try Again</h4>
            }
          <br/>
          <h5>Note: Username = admin , Password = 123321</h5>
        </div>
    }
    </>
  )
}

export default Home