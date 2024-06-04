import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  
  const[data,isloading,error]=useFetch("https://jsonplaceholder.typicode.com/photos")
  return (
    <>
    <div className='main-container'>
    <h1>All cards are here</h1>
    <div className="card-container">
   
    {error && <p>{error}</p>}
    {isloading && <p>Loading...</p>}

     {data && data.slice(0,10).map((item)=> <div className='card'>
      <img src={item.thumbnailUrl} alt="" width={130}/>
      <h2>{item.title}</h2>
      <p>{item.url}</p>
    </div>)}
   
    </div>
    </div>
    </>
  )
}

export default App
