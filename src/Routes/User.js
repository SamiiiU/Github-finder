import React, { useEffect, useRef, useState } from 'react'
import UsersContainer from '../components/UsersContainer';
import Loading from '../components/Loading';

const User = () => {
    const [users , setUser] = useState([]);
    const [loading , setLoading] = useState(false);
    let baseURL = 'https://api.github.com/users';
    const user = useRef("");

    async function Allusers(){
      if(user.current.value === ""){
        setLoading(true)
      const res = await fetch(baseURL);
      const data = await res.json();
      setUser(data);
      setLoading(false);
      }
    }

    

    async function FindUser() {
        setLoading(true);
        if(user.current.value !== ""){
          setUser("");
          const resp = await fetch(baseURL + "/" + user.current.value);
          const data = await resp.json();
          console.log(data);
          setUser(() => [data]);
          user.current.value = "";
          
        }else{
          Allusers();
        }
        setLoading(false);
    }

    const handleKeyDown = (event) => {
      if (event.keyCode === 13 && user.current.value !== "") { // Check if the key pressed is Enter (keyCode 13)
        FindUser();
      }
    }; 

    useEffect(() => {
      Allusers();

    }, [setUser]);
    
  return (
    <div>
      <div className='flex items-center justify-center my-5 h-11'>
        <input type='text' placeholder='search user...'
        className='w-2/3 h-full px-2 font-semibold text-gray-800 outline-none md:w-1/3'
        ref={user} onKeyDown={handleKeyDown}/>
        <button onClick={FindUser} className='h-full px-4 font-semibold bg-teal-500'>Search</button>
      </div>
      {loading ? <Loading /> : <UsersContainer users = {users}  />}
    </div>
  )
}

export default User;
