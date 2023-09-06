import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
    <div id="brand">
        Are you foodie!
    </div>
    <div id="social">
        <button className='btn btn-success'>
            <span className='glyphicon glyphicon-log-in'> </span> login
        </button>
        <a href="www.facebook.com" target="_blank">
            <img src="images/facebook.png" alt="fb" class="socialImg"/>
        </a>
        <a href="www.facebook.com" target="_blank">
            <img src="images/insta.png" alt="fb" class="socialImg"/>
        </a>
        <a href="www.facebook.com" target="_blank">
            <img src="images/youtube1.png" alt="fb" class="socialImg"/>
        </a>
    </div>
</header>
  )
}

export default Header
