import React from 'react';

const UsersContainer = ({ users } , {search}) => {
   
  return (
    <div className='flex flex-wrap gap-5 justify-center py-5'>
      {Array.isArray(users) && users.map((user, idx) =>
          user.login ? (
          <div key={idx} className='flex w-[200px] border border-gray-500
          bg-gray-900 p-4 flex-col items-center'>

          <img src={user.avatar_url} alt={`User ${idx}`} className='w-24
           border-4 border-teal-400 rounded-full ' />

          <h1 className='text-xl'>{user.login}</h1> 

          <span className='text-gray-200 bg-teal-600 my-3 font-semibold block py-1 px-4 tracking-wide rounded cursor-pointer'>
            View
          </span> 
          
          
        </div>
      ) : (
        <div className='md:text-4xl text-2xl'>
          No user found by the name {search};
        </div>
      ) )}
    </div>
  );
}

export default UsersContainer;
