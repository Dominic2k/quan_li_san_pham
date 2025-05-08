import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add(props) {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',
        image: '',
        color: '',
        name_category: '',
        material: '',
        expiry_date: '',
        origin: '',
        description: '',
        tinhtranghang: true,
    });
    
    const imageRef = useRef();
    
    useEffect(() => {
        const { match } = props;
        if (match) {
            const id = match.params.id;
            axios({
                method: 'GET',
                url: `http://localhost:3001/products/${id}`,
                data: null
            }).then(res => {
                const data = res.data;
                setProduct({
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    image: data.image,
                    color: data.color,
                    name_category: data.name_category,
                    material: data.material,
                    expiry_date: data.expiry_date,
                    origin: data.origin,
                    description: data.description,
                    tinhtranghang: data.tinhtranghang,
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }, [props.match]);

    const onChange = (event) => {
        const target = event.target;
        const name = target.name;
        const type = target.type;
        let value = target.value;
        
        if (name === 'tinhtranghang') {
            value = target.value === 'true' ? true : false;
        }
        
        if (type === 'file') {
            value = imageRef.current.value.replace(/C:\\fakepath\\/i, "/images/");
        }

        setProduct({
            ...product,
            [name]: value,
        });
    };

    const onSave = (e) => {
        e.preventDefault();
        const { id, name, price, image, name_category, color, material,
            expiry_date, origin, description, tinhtranghang } = product;
        const { history } = props;
        
        if (id) {
            axios({
                method: 'PUT',
                url: `http://localhost:3000/products/${id}`,
                data: {
                    name: name,
                    price: price,
                    image: image,
                    color: color,
                    name_category: name_category,
                    material: material,
                    expiry_date: expiry_date,
                    origin: origin,
                    description: description,
                    tinhtranghang: tinhtranghang,
                }
            }).then(res => {
                toast.success("Cập nhật sản phẩm thành công");
                history.goBack();
            });
        } else {
            if (name === '' && price === '' && image === '' && material === '' && expiry_date === '') {
                toast.warn("Vui lòng nhập đủ nội dung");
            } else {
                axios({
                    method: 'POST',
                    url: 'http://localhost:3000/products',
                    data: {
                        name: name,
                        price: price,
                        image: image,
                        color: color,
                        name_category: name_category,
                        material: material,
                        expiry_date: expiry_date,
                        origin: origin,
                        description: description,
                        tinhtranghang: tinhtranghang,
                    }
                }).then(res => {
                    toast.success("Thêm sản phẩm thành công");
                    history.goBack();
                });
            }
        }
    };

    const onClear = () => {
        setProduct({
            name: '',
            price: '',
            image: '',
            color: '',
            name_category: '',
            material: '',
            expiry_date: '',
            origin: '',
            description: '',
            tinhtranghang: true,
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
                            <div className="panel panel-warning col-md-8 ml">
                                <div className="container">
                                    <div className="panel-body mt-4">
                                        <form onSubmit={onSave}>
                                            <div className="form-group">
                                                <label>Tên Sản phẩm :</label>
                                                <input type="text" name="name" value={product.name} onChange={onChange} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Giá Sản phẩm ($) :</label>
                                                <input type="number" name="price" value={product.price} onChange={onChange} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Chọn Ảnh :</label>
                                                <input type="file" name="image" ref={imageRef} onChange={onChange} className="form-control" />
                                            </div>
                                            <label>Loại sản phẩm:</label>
                                            <select className="form-control" name="name_category" value={product.name_category} onChange={onChange} required="required">
                                                <option value="sản phẩm mới">mới</option>
                                                <option value="sản phẩm hot">hot</option>
                                                <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                                            </select>
                                            <div className="form-group">
                                                <label>Màu bánh :</label>
                                                <input type="text" name="color" value={product.color} onChange={onChange} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Nguyên liệu :</label>
                                                <input type="text" name="material" value={product.material} onChange={onChange} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Hạn sữ dụng :</label>
                                                <input type="date" name="expiry_date" value={product.expiry_date} onChange={onChange} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Xuất xứ :</label>
                                                <input type="text" name="origin" value={product.origin} onChange={onChange} className="form-control" />
                                            </div>
                                            <label>Tình trạng hàng :</label>
                                            <select className="form-control" name="tinhtranghang" value={product.tinhtranghang} onChange={onChange} required="required">
                                                <option value={true}>Còn hàng</option>
                                                <option value={false}>Hết hàng</option>
                                            </select>
                                            <div className="form-group">
                                                <label>Mô tả :</label>
                                                <input type="text" name="description" value={product.description} onChange={onChange} className="form-control" />
                                            </div>
                                            <br />
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                                                <button type="button" onClick={onClear} className="btn btn-primary">Clear</button>
                                                <NavLink to="/product-list" className="btn btn-primary ml-1">Trở về</NavLink>
                                            </div>
                                        </form>
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

export default Add;
