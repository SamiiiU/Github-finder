import React from 'react';

const UsersContainer = ({ users }) => {
    console.log(users);
  return (
    <div>
      {Array.isArray(users) && users.map((user, idx) => (
        <div key={idx}>
          <img src={user.avatar_url} alt={`User ${idx}`} className='w-24 border-4 border-teal-400 rounded-full ' />
        </div>
      ))}
    </div>
  );
}

export default UsersContainer;
