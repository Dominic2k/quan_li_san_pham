import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/contacts')
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <React.Fragment>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <table className="table table-bordered table-hover mt-6 ml-5">
                <thead>
                  <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên chủ phản hồi</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Nội dung</th>
                    <th className="text-center">Trạng thái</th>
                    <th className="text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact, index) => (
                    <Item key={index} index={index} contact={contact} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function Item({ contact, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.messages}</td>
      <td className="text-center">
        <span className={contact.status === '' ? 'badge badge-danger' : 'badge badge-success'}>
          {contact.status === '' ? 'Chưa xác nhận' : 'Xác nhận'}
        </span>
      </td>
      <td className="text-center">
        <NavLink to={`/contacts/${contact.id}/contactdetail`}>
          <button type="button" className="btn btn-primary ml-1">Chi tiết</button>
        </NavLink>
      </td>
    </tr>
  );
}

export default ProductList;
