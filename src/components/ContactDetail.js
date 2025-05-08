import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProDetailAdmin() {
  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/contacts/${id}`)
      .then((res) => {
        setContact(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <React.Fragment>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <div className="container mb-5 mt-5">
                <div className="row">
                  <div className="card" style={{ width: '28rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">Tên: {contact.name}</h5>
                      <h5 className="card-title">Email: {contact.email}</h5>
                      <h5 className="card-title">Nội dung: {contact.messages}</h5>
                      <NavLink to="/contact-list">
                        <p className="btn btn-primary">Trở Về</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProDetailAdmin;
