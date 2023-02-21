import { useState,useEffect,createContext } from "react";
const DataContext = createContext({});

export const DataProvider = ({children}) =>
{
  const [students,setStudents] = useState([]);


  useEffect(() =>
  {
    const authentication = {username : "admin",password : "123321"};      
    localStorage.setItem('auth',JSON.stringify(authentication));    
    if(students.length === 0)
    {
      const dummyStudents = [ 
        {id : 1, name : "Student-1", marks : 80},   
        {id : 2, name : "Student-2", marks : 85},   
        {id : 3, name : "Student-3", marks : 92}   
      ];
      localStorage.setItem('students',JSON.stringify(dummyStudents));
      setStudents(dummyStudents);
    }
  },[students])

  return (
    <DataContext.Provider value={{
      students,setStudents
    }}>
         {children}
    </DataContext.Provider>
  );

}

export default DataContext;
