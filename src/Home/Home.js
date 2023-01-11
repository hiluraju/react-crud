import React from 'react'

const Home = ({showForm,setShowForm,username,password,setUsername,setPassword,handleLogin,loginerror}) => {
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
              required
              value={username}
              onChange={e=>setUsername(e.target.value)}
              />
            <br/><br/>
            <input 
              type="password"
              placeholder='Enter Password'
              required
              value={password}
              onChange={e=>setPassword(e.target.value)}
              />
            <br/><br/>
            <button onClick={handleLogin}>Login</button>
            <br/><br/>
            {loginerror && 
             <h4 className='red'>Login Credentials are Wrong.Please try Again</h4>
            }

        </div>
    }
    </>
  )
}

export default Home