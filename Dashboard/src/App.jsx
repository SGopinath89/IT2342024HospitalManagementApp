import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Doctors from "./components/Doctors";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "reacy-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import axios from "axios";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = 
    useContext(Context);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/v1/user/patient/me",
            { withCredentials: true }
          );
          setIsAuthenticated(true);
          setUser(response.date.user);
        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        }
      };
      fetchUser();
    }, [isAuthenticated]);

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