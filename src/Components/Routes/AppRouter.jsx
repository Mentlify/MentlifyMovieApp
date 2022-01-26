import {  Route, Routes } from 'react-router-dom';
import Navbar from '../../Common/Navbar';
import Home from '../Pages/Home/Home';

const AppRouter = () => {
  return <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </>;
};

export default AppRouter;
