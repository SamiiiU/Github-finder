import React from 'react'

const Tabs = ({type , setType}) => {
  return (
    <>
     <button className={`${type === "repos" && "text-teal-400"}` } onClick={() => setType("repos")}>Repos</button>

    

    <button className={`${type === "followers" && "text-teal-400"}` } onClick={() => setType("followers")}>Followers</button> 
    </>
  )
}

export default Tabs;
