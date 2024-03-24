
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Formateur from './Components/Formateur'
import Formation from './Components/Formation'
import Profile from './Components/Profile'
import Ajout from './Components/addFormation'
import AddFormateur from './Components/AddFormateur'
import Editformateur from './Components/Editformateur'
import Debut from './Components/Debut'
import FormateurLogin from './Components/FormateurLogin'
import Formateurdetail from './Components/Formateurdetail'


function App() {
  

  return (
  <BrowserRouter>
  <Routes>
  <Route path='/debut' element={<Debut/>} > </Route>
    <Route path='/adminlogin' element={<Login />}></Route>
    <Route path='/formateur_login' element={<FormateurLogin />}></Route>
    <Route path='/formateur_detail/:id' element={<Formateurdetail/>} > </Route>
    <Route path='/dashboard' element={
    <Dashboard />}>
      <Route path='' element={<Home/>} >  </Route>
      <Route path='/dashboard/formateur' element={<Formateur/>} >  </Route>
      <Route path='/dashboard/formation' element={<Formation/>} >  </Route>
      <Route path='/dashboard/profile' element={<Profile/>} >  </Route>
      <Route path='/dashboard/add_formation' element={<Ajout/>} > </Route>
      <Route path='/dashboard/add_formateur' element={<AddFormateur/>} > </Route>
      <Route path='/dashboard/edit_formateur/:id' element={<Editformateur/>} > </Route>
    
    
      
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
