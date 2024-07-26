import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import Tabs from '../components/Tabs';
import Repos from '../components/Repos';
import UsersContainer from '../components/UsersContainer';


const UserInfo = () => {
    const [userInfo , setUser] = useState(null);
    const [type , setType] = useState("repos");
    const [infos , setTInfos] = useState(null);
    const [loading , setLoading] = useState(false);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    let baseURL = 'https://api.github.com/users';

    async function getUserinfo(){
        setLoading(true);
        const resp = await fetch(baseURL + pathname);
        const data = await resp.json();
        setUser(data);
        setLoading(false)
    }

    async function getURLs(){
        setLoading(true)
        const resp = await fetch(baseURL + pathname + `/${type}`);
        const data = await resp.json();
        setTInfos(data);
        setLoading(false);
    }

    useEffect(() => {
        getUserinfo();
        getURLs();
      }, [pathname,type]);
    
      useEffect(() => {
        
        console.log(infos);
      }, [userInfo,infos]);

      if (!userInfo){
        return <Loading />
      }
    return (
    
    <div className='py-5'>
      <button onClick={() => navigate('/')} className='px-6 py-2 mx-2 my-2 mb-4 font-semibold text-gray-200 bg-teal-400 rounded'>Back</button>

    <div className='flex flex-col justify-center gap-10 px-4 md:flex-row md:px-0' >
        <img src={userInfo.avatar_url} className='md:w-[350px] w-[250px] border-4 border-teal-400 md:mx-0 mx-auto' />
        <div className='px-3 text-lg leading-10 text-center md:text-left'>
            <h1 className='pb-4 text-3xl '>{userInfo.name}</h1>
            <h1>
                <span className='text-teal-400'>Login Name </span> : {userInfo.login}
            </h1> 

            <h1>
                <span className='text-teal-400'>Followers </span> : {userInfo.followers}
            </h1> 

            <h1>
                <span className='text-teal-400'>Following </span> : {userInfo.following}
            </h1> 

            <h1>
                <span className='text-teal-400'>Public Repos </span> : {userInfo.public_repos}
            </h1> 

            <h1>
                <span className='text-teal-400'>Join at </span> : {new Date(userInfo.created_at).toLocaleDateString()}
            </h1> 

            <a href={userInfo.html_url} className='text-teal-400' target='_blank'>View Profile on <i className ="mx-1 fa-brands fa-github"></i></a>
        </div>  

        
    
    </div>
    <div className='flex items-center justify-center gap-10 pb-4 text-2xl border-b-2 mt-14 ' >
        <Tabs type = {type} setType= {setType} />   
    </div>
    {type === "repos" && (
        <div>
            {loading ? <Loading /> : <Repos users={infos}/>}
        </div>
    )}

    

    {type === "followers" && (
        <div>
            {loading ? <Loading /> : <UsersContainer users={infos}/>}
            
        </div>
    )}

      
    </div>
  )
}

export default UserInfo;

