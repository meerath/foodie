import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './componets/home/Home'
import Main from './Main'
// import Search from './componets/home/Search'
// import QuickSearch from './componets/home/QuickSearch'
import Listing from './componets/Listing/Listing'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    {/* <Search/> */}
       <Routes>
       <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/>
         
            <Route path='listing/:id' element={<Listing/>} />
      </Route>
       </Routes>
       {/* <QuickSearch/> */}
    <Footer/>   
    </BrowserRouter>
  )
}

export default App
