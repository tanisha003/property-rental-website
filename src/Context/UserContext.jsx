import React, { createContext, useState } from 'react'
import { FaChildren } from 'react-icons/fa6'
export let dataContext=createContext()
function UserContext({children}) {
    let [title,setTitle]=useState("")
    let [addListing,setaddListing]=useState(false)
    let [addImage1,setIaddImage1]=useState(null)
    let [addImage2,setIaddImage2]=useState(null)
    let [addImage3,setIaddImage3]=useState(null)
    let [price,setprice]=useState(null)
    let value={
        title,
        setTitle,
        addListing,
        setaddListing,
        addImage1,
        setIaddImage1,
        addImage2,
        setIaddImage2,
        addImage3,
        setIaddImage3,
        price,
        setprice
    }

  return (
    <div>
      <dataContext.Provider value={value}>
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext
