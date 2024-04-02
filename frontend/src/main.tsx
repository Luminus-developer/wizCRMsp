import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainTemplate from './template/mainTemplate.tsx';
import Login from './pages/login.tsx'
import DashBoard from './pages/dashboard.tsx';

import './App.css'
import Customers from './pages/contacts/customers.tsx';
import Prospects from './pages/contacts/prospects.tsx';
import Leads from './pages/contacts/leads.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  /*<React.StrictMode>*/
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<MainTemplate><DashBoard/></MainTemplate>}/>
          <Route path="/contacts/leads" element={<MainTemplate><Leads/></MainTemplate>}/>
          <Route path="/contacts/prospects" element={<MainTemplate><Prospects/></MainTemplate>}/>
          <Route path="/contacts/customers" element={<MainTemplate><Customers/></MainTemplate>}/>
      </Routes>
</BrowserRouter>
  /*</React.StrictMode>,*/
)
