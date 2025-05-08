import React, { useState } from 'react';
import axios from 'axios';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, NavLink } from 'react-router-dom';

function Register(props) {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    registered: false
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const onRegister = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = user;

    // Validate form
    if (!username || !email || !password || !confirmPassword) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ!");
      return;
    }

    // Check if username already exists
    axios.get('http://localhost:3001/users')
      .then(res => {
        const users = res.data;
        const userExists = users.some(u => u.username === username);
        
        if (userExists) {
          toast.error("Tên đăng nhập đã tồn tại!");
        } else {
          // Register new user
          axios.post('http://localhost:3001/users', {
            username,
            email,
            password
          })
          .then(res => {
            toast.success("Đăng ký thành công!");
            setUser({
              ...user,
              registered: true
            });
          })
          .catch(err => {
            console.log(err);
            toast.error("Đăng ký thất bại. Vui lòng thử lại sau!");
          });
        }
      })
      .catch(err => {
        console.log(err);
        toast.error("Lỗi kết nối server!");
      });
  };

  if (user.registered) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <form onSubmit={onRegister} className="beta-form-checkout">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <h4>Đăng ký tài khoản</h4>
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
                  <label htmlFor="email">Email*</label>
                  <input 
                    className="form-control" 
                    type="email" 
                    name="email" 
                    value={user.email} 
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
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu*</label>
                  <input 
                    className="form-control" 
                    type="password" 
                    name="confirmPassword" 
                    value={user.confirmPassword} 
                    onChange={onChange} 
                    required 
                  />
                </div>
                
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Đăng ký</button>
                </div>
                
                <div className="form-block">
                  <p>Đã có tài khoản? <NavLink to="/login">Đăng nhập ngay</NavLink></p>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </form>
        </div> {/* #content */}
      </div>
      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
}

export default Register;
