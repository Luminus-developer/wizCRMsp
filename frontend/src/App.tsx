import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import Login from './pages/login';
import MainTemplate from './template/mainTemplate';
import DashBoard from './pages/dashboard';
//import Leads from './pages/contacts/leads';
//import Prospects from './pages/contacts/prospects';
//import Customers from './pages/contacts/customers';

import PrivateRoute from './components/privateRoute';

const isAuthenticated: boolean = false;

function App() {
  return (
    <>
      <BrowserRouter>
        <MainTemplate isAuthenticated={isAuthenticated}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard"
                   element={<PrivateRoute 
                              isAuthenticated={isAuthenticated} 
                              component={<DashBoard/>}/>}
                />
            
            </Routes>
         </MainTemplate>
      </BrowserRouter>    
    </>
  )
}
export default App
