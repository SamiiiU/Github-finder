import React from 'react';
import { Link } from 'react-router-dom';

const UsersContainer = ({ users } ) => {
   
  return (
    <div className='flex flex-wrap justify-center gap-5 py-5'>
      {Array.isArray(users) && users.map((user, idx) =>
          
          <div key={idx} className='flex w-[200px] border border-gray-500
          bg-gray-800 p-4 flex-col items-center animate-fadeup'>

          <img src={user.avatar_url} alt={`User ${idx}`} className='w-24 border-4 border-teal-400 rounded-full ' />

          <h1 className='text-xl'>{user.login}</h1> 
          <Link to={`/${user.login}`}>
          <span className='block px-4 py-1 my-3 font-semibold tracking-wide text-gray-200 bg-teal-600 rounded cursor-pointer'>
            View  
          </span> 
          </Link>
          
          
        </div>
      ) }
    </div>
  );
}

export default UsersContainer;
