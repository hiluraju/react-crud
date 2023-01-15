import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({students,handleDelete}) => {
  return (
    <div className='cen tbl'>        
        { students && 
          <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Marks</th>
                  <th>Actions</th>
                  <th></th>
                 </tr>
              </thead>
              <tbody>
                {students.map((s) =>
                (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.marks}</td>
                    <td>
                        <button><Link to={`/edit/${s.id}`}>Edit</Link></button>
                        <button onClick={()=>handleDelete(s.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        }
        
    </div>
  )
}

export default Table