import React, { useState, useEffect } from 'react';
import UseFetch from './UseFetch';
import FetchYogaData from './FetchYogaData';
const FetchData = () => {
  
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  const [showYogaData, setShowYogaData] = useState(false);
  // console.log(data)
  const handleYogaData = () => {
    
    setTimeout(() =>{
      setShowYogaData(true);
    },1000)
  
  
  }
  return (
    <>
    <button onClick={handleYogaData}>Fetch Yoga Data</button>
    <ul>
     
      {showYogaData && <FetchYogaData/>}
    </ul>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {data && data.map( (e =>(
          
          <>
          <li>Name:{e.name}</li>
          <li>image:<img src={e.image} width="100px" height="auto"/></li>
          <li>benefits:{e.benefits}</li>
          <li>importance:{e.importance}</li>
          <li>Best_time_to_intake:{e.best_time_to_intake}</li>
          </>
          )))}
     </ul>
      
     
    </>
  )
}

export default FetchData;