import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setUsername('');
    window.location.href = '/';
  };

  return (
    <div id="header">
      <div className="header-top">
        <div className="container">
          <div className="pull-left auto-width-left">
            <ul className="top-menu menu-beta l-inline">
              <li><a><i className="fa fa-home" /> 33 Xô Viết Nghệ Tĩnh, Hãi Châu, Đà Nẵng</a></li>
              <li><a><i className="fa fa-phone" /> 0336908928</a></li>
            </ul>
          </div>
          
          <div className="pull-right auto-width-right">
            <ul className="top-details menu-beta l-inline">
              {isLoggedIn ? (
                <>
                  <li><span>Xin chào, {username}</span></li>
                  <li><a onClick={handleLogout} style={{cursor: 'pointer'}}>Đăng xuất</a></li>
                </>
              ) : (
                <>
                  <li><NavLink className="text-decoration" to="/login">Đăng nhập</NavLink></li>
                  <li><NavLink className="text-decoration" to="/register">Đăng ký</NavLink></li>
                </>
              )}
            </ul>
          </div>
          
          <div className="clearfix" />
        </div> {/* .container */}
      </div> {/* .header-top */}
      <div className="header-body">
        <div className="container beta-relative">
          <div className="pull-left">
            <NavLink to="/">
              <img src="assets/dest/images/logo-cake.png" width="200px" alt="" />
            </NavLink>             
          </div>
          <div className="clearfix" />
        </div> {/* .container */}
      </div> {/* .header-body */}
      <div className="header-bottom" style={{backgroundColor: '#0277b8'}}>
        <div className="container">
          <a className="visible-xs beta-menu-toggle pull-right" href="#"><span className="beta-menu-toggle-text">Menu</span> <i className="fa fa-bars" /></a>
          <div className="visible-xs clearfix" />
          <nav className="main-menu">
            <ul className="l-inline ov">
              <li><NavLink className="text-light" to="/">Trang chủ</NavLink></li>
              <li><a>Sản phẩm</a>
                <ul className="sub-menu">
                  <li><NavLink to="/sanphamhot">Sản phẩm Hot</NavLink></li>
                  <li><NavLink to="/sanphammoi">Sản phẩm Mới</NavLink></li>
                  <li><NavLink to="/sanphamkhuyenmai">Sản phẩm Khuyến Mãi</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/introduce" className="text-light">Giới thiệu</NavLink></li>              
              <li><NavLink to="/contact" className="text-light b">Liên hệ</NavLink></li>
            </ul>
            <div className="clearfix" />
          </nav>
        </div> {/* .container */}
      </div> {/* .header-bottom */}
    </div>
  );
}

export default Header;


