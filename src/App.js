import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import {users} from './info/users'
import Main from './components/Main'


function App() {

  return (
    <div className="App">
      <Header title='Listado de pacientes'/>
      <div className='cont'>
        <Sidebar title='CLASIFICACION DE PACIENTES'/>
        <Main data={users}/>
      </div>



    </div>
  );
}

export default App;
