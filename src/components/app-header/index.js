import React, { memo } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import './header.scoped.css';

const HYAppheader = memo(() => {
  return (
    <div className='header_wrapper'>
        <div className='content wrap-v1'>
            {/* <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">我的朋友</NavLink> */}
            <div className='header_left'>
              <a href='#/' className='logo sprite_01'></a>
            </div>
            <div className=''>right</div>
        </div>
        <div className='divider'></div>
    </div>
  )
})

export default HYAppheader