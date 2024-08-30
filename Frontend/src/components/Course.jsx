import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Course() {
  const[book,setBook]= useState([])
  useEffect(()=>{
    const getBook= async()=>{
      try {
       const res=await axios.get("http://localhost:4001/book")
       console.log(res.data)
       setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='pt-28 text-center'>
      <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
      <p className='mt-12'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi optio corrupti enim! Incidunt, quo numquam minima delectus ipsum odit, maiores dolorum deserunt necessitatibus consequuntur error mollitia quisquam iusto neque reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolores minima libero temporibus provident aperiam facere explicabo animi doloremque ipsum!
      </p>
     <Link to='/'>
     <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-700'>Back</button>
    
     </Link>
    </div>
    <div className='mt-8 grid grid-cols-1 md:grid-cols-3'>
      {
        book.map((item)=>{
          return(
            <Cards key={item.id} item={item} />
          )

        })
      }
    </div>
    </div>
    </>
  )
}

export default Course