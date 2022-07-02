import { useContext } from 'react';
import '../App.css';
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import DataContext from './DataContext';

function UserTable() {
 const {paginated,error}=useContext(DataContext)

  return (
    <div className="App">
         <Search/>
         <Table /> 
       {paginated.length===0?<p className='name-error'>{error}</p>:null}

        <div className='pagination-part'>
          <Pagination />
        </div>
    </div>
  );
}

export default UserTable;
