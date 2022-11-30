import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
