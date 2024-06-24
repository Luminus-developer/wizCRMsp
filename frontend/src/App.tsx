import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import MainTemplate from './template/mainTemplate';
import DashBoard from './pages/dashboard';
//import Leads from './pages/contacts/leads';
//import Prospects from './pages/contacts/prospects';
//import Customers from './pages/contacts/customers';

import PrivateRoute from './components/privateRoute';

import { AuthProvider } from './context/authContext';

function App() {

  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <MainTemplate>
              <Routes>
             
                  <Route path="/dashboard"
                    element={<PrivateRoute component={<DashBoard/>}/>}
                  />
              </Routes>
          </MainTemplate>
        </BrowserRouter>    
      </AuthProvider>
    </>
  )
}
export default App
