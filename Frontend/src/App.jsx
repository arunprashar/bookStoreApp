
import './App.css'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import Courses from './courses/Courses'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser]=useAuth()
  console.log(authUser)

 

  return (
    <>
   <div className='dark:bg-white dark:text-black' >
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
    <Route path='/signup' element={<Signup/>}/>  
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Toaster />
   </div>
    </>
  )
}

export default App
