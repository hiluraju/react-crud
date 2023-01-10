import React from 'react'

const Home = ({showForm,setShowForm,username,password,setUsername,setPassword,handleLogin}) => {
  return (
    <> 
    {!showForm && 
        <div>
            <button onClick={()=>setShowForm(!showForm)}>Click For Login</button>
        </div>
    }
    
    { showForm && 
        <div>
            <input 
              type="text"
              autoFocus
              placeholder='Enter Username'
              value={username}
              onChange={e=>setUsername(e.target.value)}
              />
            <br/><br/>
            <input 
              type="password"
              autoFocus
              placeholder='Enter Password'
              value={password}
              onChange={e=>setPassword(e.target.value)}
              />
            <br/><br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    }
    </>
  )
}

export default Home