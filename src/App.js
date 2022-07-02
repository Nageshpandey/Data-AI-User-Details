
import './App.css';
import React, { useContext } from 'react';
import UserTable from './Component/UserTable';
import User from './Component/User';
import DataContext from './Component/DataContext';


function App() {
  const{flage}=useContext(DataContext)
  return(
    <div className='App'>
      {flage? <User />:<UserTable/>}
      
     
    </div>
  )
}

export default App;
