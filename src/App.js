import { useState } from 'react';
import './App.css';
import Home from './Home/Home';

function App() {

  const [showForm,setShowForm] = useState(false);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = () =>
  {
    console.log(username);
    console.log(password);
  }


  return (
    <div className="cen">
      <h2>REACT CRUD</h2>
      <hr/>
      <Home showForm = {showForm}
            setShowForm = {setShowForm}
            username = {username}
            password = {password}
            setUsername = {setUsername}
            setPassword = {setPassword}
            handleLogin = {handleLogin}
             />
    </div>
  );
}

export default App;
