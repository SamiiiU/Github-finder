import React from 'react'

const Repos = ({users}) => {
  return (
    <div>
      {Array.isArray(users) && users.map((repos,index ) => (
        <div key={index} className='p-4 m-6 leading-8 bg-gray-800 rounded-sm md:m-6 animate-fadeup'>
            <a href={repos.html_url} className='text-sm text-teal-400 md:text-lg' target='_blank'>{repos.full_name}</a> 
            <div className='flex flex-col justify-center text-xs md:text-sm gap-y-2'>
                <h1><span className='text-teal-400'>Description : </span>{repos.description}</h1> 
                <div className='flex flex-row gap-x-9'>
                    <h1>Language :  {repos.language ? repos.language : "Unknown"} </h1> 
                    <h1>Forks :  {repos.forks} </h1>    
                    <h1>Stars :  {repos.stargazers_count} </h1>    
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Repos
