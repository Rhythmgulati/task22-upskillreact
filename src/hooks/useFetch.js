import React, { useCallback, useEffect, useState } from 'react'

function useFetch(url) {
let[isloading,setloading]=useState(false);
let[data,setdata]=useState(null);
let[error,seterror]=useState(null);

console.log(isloading);
 const fetchdata = useCallback(()=>{
    setloading(true);
    seterror(null);
    console.log(isloading);
   fetch(url)
    .then(res=>res.json())
    .then(resp=>{
        setloading(false);
        console.log(isloading);
        setdata(resp);
      
       
    }
)
    .catch(error=>{
        setloading(false)
        seterror(error.message);
        console.log(error);
    })
},[url])

  useEffect(()=>{fetchdata()},[fetchdata])
  
  return [data,isloading,error]
}

export default useFetch
