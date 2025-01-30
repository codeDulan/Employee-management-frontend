import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponents from './components/HeaderComponents'
import FooterComponents from './components/FooterComponents'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponents from './components/EmployeeComponents'
import LandingPage from "./components/LandingPage";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponents/>
        <Routes>
          {/* // http://localhost:3000 */}
            <Route path="/" element={<LandingPage />} />
            {/* // http://localhost:3000/employees */}
            <Route path='/employees' element = { <ListEmployeeComponents/>}></Route>
            {/* // http://localhost:3000/add-employee */}
            <Route path='/add-employee' element = { <EmployeeComponents/>}></Route>
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element = { <EmployeeComponents/>}></Route>
        </Routes>
      <FooterComponents/>
      </BrowserRouter>
      
    </>
  )
}

export default App

//web appppp
