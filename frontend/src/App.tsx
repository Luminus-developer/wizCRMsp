import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Login from './pages/login';
import MainTemplate from './template/mainTemplate';
import DashBoard from './pages/dashboard';
//import Leads from './pages/contacts/leads';
//import Prospects from './pages/contacts/prospects';
//import Customers from './pages/contacts/customers';

//import PrivateRoute from './components/privateRoute';

import { AuthProvider } from './context/authContext';
//import RequireAuth from './components/requireAuth';

//const isAuthenticated: boolean = false;

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <MainTemplate>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/dashboard" element={<DashBoard /> }/>
                  {/*
                  <Route path="/dashboard"
                    element={<PrivateRoute 
                                isAuthenticated={isAuthenticated} 
                                component={<DashBoard/>}/>}
                  />
                  */}
              </Routes>
          </MainTemplate>
        </BrowserRouter>    
      </AuthProvider>
    </>
  )
}
export default App
