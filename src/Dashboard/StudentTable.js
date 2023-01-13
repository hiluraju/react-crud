import React from 'react'

const StudentTable = ({students}) => {
  return (
    <div className='cen tbl'>        
        { students && 
          <table>
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Marks</th>
                 </tr>
              </thead>
              <tbody>
                {students.map((s) =>
                (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.marks}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        }
        
    </div>
  )
}

export default StudentTable