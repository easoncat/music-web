import React, { memo } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
import { headerLinks } from "@/common/local-data";
import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd";

import './header.scoped.less';

const HYAppheader = memo(() => {

  const showSelectItem = (item, index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <div className='header_wrapper'>
        <div className='content wrap-v1'>
            {/* <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">我的朋友</NavLink> */}
            <div className='header_left'>
              <a href='#/' className='logo sprite_01'></a>
              <div className='select-list'>
                {
                  headerLinks.map((item, index) => {
                    return (
                      <div key={item.title} className='select-item'>
                        {showSelectItem(item, index)}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='header_right'>
                <Input placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
                <div className='center'>创作者中心</div>
                <div className=''>登录</div>
            </div>
        </div>
        <div className='divider'></div>
    </div>
  )
})

export default HYAppheader