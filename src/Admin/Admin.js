import React from 'react'

const Admin = () => {
  return (
    <div>
        <h4>ADMIN PANEL</h4>
        <div>
            <p>STUDENT DETAILS</p>
            <input 
              type="text"
              autoFocus
              placeholder='Enter Student Name'
              required
            //   value={username}
            //   onChange={e=>setUsername(e.target.value)}
              />
            <br/><br/>
            <input 
              type="number"
              placeholder='Enter Mark'
              required
            //   value={password}
            //   onChange={e=>setPassword(e.target.value)}
               />
            <br/><br/>
            <button 
            // onClick={handleLogin}
            >
                Add</button>
        </div>
    </div>
  )

}

export default Admin