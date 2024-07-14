import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import MainTemplate from './template/mainTemplate';
import DashBoard from './pages/dashboard';
//import Leads from './pages/contacts/leads';
//import Prospects from './pages/contacts/prospects';
//import Customers from './pages/contacts/customers';

import PrivateRoute from './components/privateRoute';

import { GeneralFunctionProvider } from './context/generalFunctionContext';

function App() {

  return (
    <>
    <GeneralFunctionProvider>
        <BrowserRouter>
          <MainTemplate>
              <Routes>
                  <Route path="/"
                    element={<PrivateRoute component={<DashBoard/>}/>}
                  />
                  <Route path="/dashboard"
                    element={<PrivateRoute component={<DashBoard/>}/>}
                  />
              </Routes>
          </MainTemplate>
        </BrowserRouter>    
      </GeneralFunctionProvider>
    </>
  )
}
export default App
