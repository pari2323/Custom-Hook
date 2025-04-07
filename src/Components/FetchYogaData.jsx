import React, {useState, useEffect} from 'react';
import UseFetch from './UseFetch';

const FetchYogaData =  () =>{
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152')
    return (
        <ul className='list_data_main'>
            <h1>Yoga Data</h1>
            {data && data.map((e,index) =>
            <>
            <p key='index'>
             <li>Name: {e.name}</li> <br />
             <li>Benefits: {e.benefits}</li> <br /> 
             <li>Time Duration: {e.time_duration}</li><br />
            </p>
            </>)

            }
        </ul>
    )
}

export default FetchYogaData;