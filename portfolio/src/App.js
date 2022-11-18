import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout';
import Sidebar from './component/Sidebar';


function App() {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
      </div>
  );
}

export default App;
