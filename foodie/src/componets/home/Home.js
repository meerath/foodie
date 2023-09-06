import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import QuickSearch from './QuickSearch'
const Home = () => {
  return (
    <div className='home'>

      <Search/>
      <QuickSearch/>

    </div>
  )
}  

export default Home
