import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Login from './pages/login';
import MainTemplate from './template/mainTemplate';
import DashBoard from './pages/dashboard';
import Leads from './pages/contacts/leads';
import Prospects from './pages/contacts/prospects';
import Customers from './pages/contacts/customers';

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<MainTemplate><DashBoard/></MainTemplate>}/>
                <Route path="/contacts/leads" element={<MainTemplate><Leads/></MainTemplate>}/>
                <Route path="/contacts/prospects" element={<MainTemplate><Prospects/></MainTemplate>}/>
                <Route path="/contacts/customers" element={<MainTemplate><Customers/></MainTemplate>}/>
            </Routes>
      </BrowserRouter>    
    </>
  )
}
export default App
