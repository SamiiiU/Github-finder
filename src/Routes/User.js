import React, { useEffect, useState } from 'react'
import UsersContainer from '../components/UsersContainer';

const User = () => {
    const [users , setUser] = useState([]);
    let baseURL = 'https://api.github.com/users';

    async function Allusers(){
      const res = await fetch(baseURL);
      const data = await res.json();
      console.log(data);
      setUser(data);
    }

    useEffect(() => {
      Allusers();
    }, []);
    
  return (
    <div>
      <UsersContainer users = {users} />
    </div>
  )
}

export default User;
