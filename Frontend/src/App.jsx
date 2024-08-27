
import './App.css'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import Courses from './courses/Courses'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"

function App() {
 

  return (
    <>
   <div className='dark:bg-white dark:text-black' >
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>  
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </div>
    </>
  )
}

export default App
