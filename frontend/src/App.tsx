import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext} from 'react';

import './App.css'
import Login from './pages/login';
import MainTemplate from './template/mainTemplate';
import DashBoard from './pages/dashboard';
//import Leads from './pages/contacts/leads';
//import Prospects from './pages/contacts/prospects';
//import Customers from './pages/contacts/customers';

import PrivateRoute from './components/privateRoute';

// Capire la differenza tra Provider e Context

import { AuthProvider } from './context/authContext';

import {AuthContext} from './context/authContext.tsx';

//import RequireAuth from './components/requireAuth';

//const isAuthenticated: boolean = false;

function App() {

  const authContext = useContext(AuthContext);

  let isUserAutheticated : boolean = false;
  if (authContext != null) {
    isUserAutheticated = authContext.isUserAutheticated();
  }

  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <MainTemplate>
              <Routes>
                  <Route path="/"
                    element={<PrivateRoute component={<DashBoard/>} isAuthenticated={isUserAutheticated}/>}
                  />
                  <Route path="/dashboard"
                    element={<PrivateRoute component={<DashBoard/>} isAuthenticated={isUserAutheticated}/>}
                  />
              </Routes>
          </MainTemplate>
        </BrowserRouter>    
      </AuthProvider>
    </>
  )
}
export default App
