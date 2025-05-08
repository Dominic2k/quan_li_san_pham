import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Confirm(props) {
    const [contact, setContact] = useState({
        id: '',
        name: '',
        email: '',
        messages: '',
        status: ''
    });

    useEffect(() => {
        const { match } = props;
        if (match) {
            const id = match.params.id;
            axios({
                method: 'GET',
                url: `http://localhost:3000/contacts/${id}`,
                data: null
            }).then(res => {
                const data = res.data;
                setContact({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    messages: data.messages,
                    status: data.status
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.match]);

    const onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        setContact({
            ...contact,
            [name]: value
        });
    };

    const onSave = (e) => {
        e.preventDefault();
        const { id, name, email, messages, status } = contact;
        const { history } = props;
        
        axios({
            method: 'PUT',
            url: `http://localhost:3000/contacts/${id}`,
            data: {
                name: name,
                email: email,
                messages: messages,
                status: status
            }
        }).then(res => {
            toast.success("Cập nhật trạng thái thành công");
            history.goBack();
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <React.Fragment>
            <div>
                <div id="wrapper">
                    <Wrapper />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="contentt">
                            <Banner />
                            <form onSubmit={onSave} className="contact-form">
                                <select 
                                    className="form-control sl" 
                                    name="status" 
                                    value={contact.status} 
                                    onChange={onChange} 
                                    required="required"
                                >
                                    <option value={true}>Xác nhận</option>
                                    <option value={false}>Chưa xác nhận</option>
                                </select>
                                <div className="form-block">
                                    <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Confirm;
