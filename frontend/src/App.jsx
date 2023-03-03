import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FindRide from './pages/FindRide'
import Publish from './pages/Publish'
import Dummy from './pages/Dummy'
// import Dummy from './pages/dummy'
import PublisherDocuments from './documents/PublisherDocuments'
import Dashboard from './admin/Dashboard'
import PrintRides from './admin/PrintRides'
import Details from './admin/Details'
import ChangePassword from './admin/ChangePassword'
import YourRides from './admin/YourRides'

export default function App() {

  // let x = document.getElementById("#htmltag").setAttribute("data-bs-theme", "dark")
  // let x = document.getElementById("#htmltag").getAttribute("data-bs-theme")
  // console.log(x);


  const test = () => {
    document.getElementById("htmltag").setAttribute("data-bs-theme", "dark")
    // const x = document.getElementById("htmltag").getAttribute()
    // console.log(x)
  }




  return (<div id='htmltag1'>
    <BrowserRouter>
      {/* <button onClick={test}>dark</button> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/find' element={<FindRide></FindRide>} />
        <Route path='/publish' element={<Publish></Publish>} />
        <Route path='/publish/document' element={<PublisherDocuments></PublisherDocuments>} />
        <Route path='/dummy' element={<Dummy></Dummy>} />
        <Route path='/details/:rideId/:seats/' element={<Details></Details>} />
        {/* <Route path='/details/:rideId/:seats/:publishername/:publisheremail' element={<Details></Details>} /> */}
        <Route path='/change-password' element={<ChangePassword></ChangePassword>} />
        <Route path='/printdata' element={<PrintRides></PrintRides>} />
        <Route path='/yourrides' element={<YourRides></YourRides>} />
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />



        {/* <Route path='/details' element={<Details></Details>} /> */}
      </Routes>
    </BrowserRouter>







  </div>

  )
}
