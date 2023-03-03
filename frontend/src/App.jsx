import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FindRide from './pages/FindRide'
import Publish from './pages/Publish'
import PublisherDocuments from './documents/PublisherDocuments'
import Dashboard from './admin/Dashboard'
import PrintRides from './admin/PrintRides'
import Details from './admin/Details'
import ChangePassword from './admin/ChangePassword'
import YourRides from './admin/YourRides'

export default function App() {




  const test = () => {
    document.getElementById("htmltag").setAttribute("data-bs-theme", "dark")

  }




  return (<div id='htmltag1'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/find' element={<FindRide></FindRide>} />
        <Route path='/publish' element={<Publish></Publish>} />
        <Route path='/publish/document' element={<PublisherDocuments></PublisherDocuments>} />
        <Route path='/details/:rideId/:seats/' element={<Details></Details>} />
        <Route path='/change-password' element={<ChangePassword></ChangePassword>} />
        <Route path='/printdata' element={<PrintRides></PrintRides>} />
        <Route path='/yourrides' element={<YourRides></YourRides>} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>







  </div>

  )
}
