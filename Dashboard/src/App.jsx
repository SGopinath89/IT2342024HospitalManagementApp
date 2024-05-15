import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import AddNewDoctor from "./components/AddNewDoctor"
import AddNewAdmin from "./components/AddNewAdmin"
import Doctors from "./components/Doctors"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/doctor/addNew' element={<AddNewDoctor/>}/>
          <Route path='/admin/addNew' element={<AddNewAdmin/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App