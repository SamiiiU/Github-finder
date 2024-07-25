import React, { useEffect, useRef, useState } from 'react'
import UsersContainer from '../components/UsersContainer';

const User = () => {
    const [users , setUser] = useState([]);
    let baseURL = 'https://api.github.com/users';
    const user = useRef("");

    async function Allusers(){
      const res = await fetch(baseURL);
      const data = await res.json();
      setUser(data);
    }

    async function FindUser() {
        if(user.current.value != ""){
          setUser("");
          const resp = await fetch(baseURL + "/" + user.current.value);
          const data = await resp.json();
          console.log(data);
          setUser(() => [data]);
          user.current.value = "";
        }else{
          Allusers();
        }
    }

    useEffect(() => {
      Allusers();
    }, []);
    
  return (
    <div>
      <div className='flex justify-center items-center h-11 my-5'>
        <input type='text' placeholder='search user...'
        className='h-full md:w-1/3 w-2/3 text-gray-800 px-2 font-semibold outline-none'
        ref={user}/>
        <button onClick={FindUser} className='bg-teal-500 font-semibold px-4 h-full'>Search</button>
      </div>
      <UsersContainer users = {users} />
    </div>
  )
}

export default User;
