import React, { useState } from 'react';
import axios from 'axios';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, NavLink } from 'react-router-dom';

function Login(props) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    loggedIn: false
  });

  const { isAdmin } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const { username, password } = user;

    if (!username || !password) {
      toast.error("Vui lòng nhập tên đăng nhập và mật khẩu!");
      return;
    }

    // Admin login
    if (isAdmin) {
      if (username === 'admin' && password === 'admin') {
        setUser({ ...user, loggedIn: true });
        localStorage.setItem('username', username);
        localStorage.setItem('isAdmin', 'true');
        toast.success("Đăng nhập thành công!");
      } else {
        toast.error("Sai tên đăng nhập hoặc mật khẩu!");
      }
    } 
    // User login
    else {
      axios.get('http://localhost:3001/users')
        .then(res => {
          const users = res.data;
          const foundUser = users.find(u => u.username === username && u.password === password);
          
          if (foundUser) {
            setUser({ ...user, loggedIn: true });
            localStorage.setItem('username', username);
            localStorage.setItem('isAdmin', 'false');
            toast.success("Đăng nhập thành công!");
          } else {
            toast.error("Sai tên đăng nhập hoặc mật khẩu!");
          }
        })
        .catch(err => {
          console.log(err);
          toast.error("Lỗi kết nối server!");
        });
    }
  };

  if (user.loggedIn) {
    return <Redirect to="/product-list" />;
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <form onSubmit={onLogin} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <h4>{isAdmin ? 'Đăng nhập Admin' : 'Đăng nhập'}</h4>
                <div className="space20">&nbsp;</div>
                
                <div className="form-block">
                  <label htmlFor="username">Tên đăng nhập*</label>
                  <input 
                    className="form-control" 
                    type="text" 
                    name="username" 
                    value={user.username} 
                    onChange={onChange} 
                    required 
                  />
                </div>
                
                <div className="form-block">
                  <label htmlFor="password">Mật khẩu*</label>
                  <input 
                    className="form-control" 
                    type="password" 
                    name="password" 
                    value={user.password} 
                    onChange={onChange} 
                    required 
                  />
                </div>
                
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </div>
                
                {!isAdmin && (
                  <div className="form-block">
                    <p>Chưa có tài khoản? <NavLink to="/register">Đăng ký ngay</NavLink></p>
                  </div>
                )}
              </div>
              <div className="col-sm-3" />
            </div>
          </form>
        </div> {/* #content */}
      </div>
      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
}

export default Login;
