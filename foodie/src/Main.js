import React from 'react'
import {Outlet} from 'react-router-dom'

const Main=()=>{
   
    return(
        <>
        <div className='container'
        style={{maxWidth:'100vw',padding:'0'}}
        >
            <Outlet/>
        </div>
        </>
    )
}
export default Main