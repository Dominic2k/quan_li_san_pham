import React, { useState } from 'react';
import axios from 'axios';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messages: '',
    status: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    const parsedValue = name === 'status' ? value === 'true' : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const onClear = () => {
    setFormData({
      name: '',
      email: '',
      messages: '',
      status: '',
    });
  };

  const onSave = (e) => {
    e.preventDefault();
    const { name, email, messages, status } = formData;

    if (name === '' && email === '' && messages === '') {
      toast.warn('Vui lòng nhập đủ nội dung');
    } else {
      axios
        .post('http://localhost:3000/contacts', {
          name,
          email,
          messages,
          status,
        })
        .then(() => {
          toast.success('Cảm ơn ý kiến của bạn chúng tôi sẽ phản hồi trong thời gian sớm nhất !');
          onClear();
        });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="mt-2"></div>
      <div className="container mb-5 mt-5">
        <div className="row">
          <div id="content" className="space-top-none">
            <div className="space50">&nbsp;</div>
            <div className="row">
              <div className="col-sm-8">
                <h2>Contact Form</h2>
                <div className="space20">&nbsp;</div>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="space20">&nbsp;</div>
                <form onSubmit={onSave} method="post" className="contact-form">
                  <div className="form-block">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                      type="text"
                      placeholder="Your Name (required)"
                    />
                  </div>
                  <div className="form-block">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      type="email"
                      placeholder="Your Email (required)"
                    />
                  </div>
                  <div className="form-block">
                    <textarea
                      name="messages"
                      value={formData.messages}
                      onChange={onChange}
                      placeholder="Your Message"
                    />
                  </div>
                  <select
                    className="form-control hidden"
                    name="status"
                    value={formData.status}
                    onChange={onChange}
                    required
                  >
                    <option value={false}>Chưa xác nhận</option>
                    <option value={true}>Xác nhận</option>
                  </select>
                  <div className="form-block">
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-sm-4">
                <h2>Contact Information</h2>
                <div className="space20">&nbsp;</div>
                <h6 className="contact-title">Address</h6>
                <p>
                  Suite 127 / 267 – 277 Brussel St,
                  <br />
                  62 Croydon, NYC
                  <br />
                  Newyork
                </p>
                <div className="space20">&nbsp;</div>
                <h6 className="contact-title">Business Enquiries</h6>
                <p>
                  Doloremque laudantium, totam rem aperiam,
                  <br />
                  inventore veritatio beatae.
                  <br />
                  <a href="mailto:biz@betadesign.com">biz@betadesign.com</a>
                </p>
                <div className="space20">&nbsp;</div>
                <h6 className="contact-title">Employment</h6>
                <p>
                  We’re always looking for talented persons to
                  <br />
                  join our team.
                  <br />
                  <a href="mailto:hr@betadesign.com">hr@betadesign.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </React.Fragment>
  );
}

export default Contact;
