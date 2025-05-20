import React, { useState, useEffect } from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import axios from 'axios';

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ul className="aside-menu mt-5">
              <li><a>Hương vị độc đáo</a></li>
              <li><a>Nguyên liệu thiên nhiên</a></li>
              <li><a>Không chất bảo quản</a></li>
              <li><a>Giá rẻ bất ngờ</a></li>
              <li><a>Đảm bảo an toàn thực phẩm</a></li>
              <li><a>Giao dịch nhanh chóng</a></li>
              <li><a>Giao hàng tận tình</a></li>
            </ul>
          </div>
          <div className="col-sm-9">
            <div className="container mb-5">
              <h2 className="text-danger text-center mt-5">Danh sách sản phẩm HOT tại cửa hàng</h2>
              <input
                className="mt-3"
                name="keyword"
                value={keyword}
                onChange={handleChange}
                type="text"
                placeholder="Search.."
              />
              <div className="row">
                {filteredProducts.map((product, index) => {
                  if (product.name_category === 'sản phẩm hot') {
                    return <Item key={index} product={product} />;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

function Item({ product }) {
  return (
    <React.Fragment>
      <div className="col-sm-4 mt-5">
        <div className="single-item">
          <div className="single-item-header">
            <a href="product.html">
              <img src={product.image} alt="" height="300" width="700" />
            </a>
          </div>
          <div className="single-item-body">
            <p className="single-item-title text-center text-danger">{product.name}</p>
            <p className="single-item-price text-center">
              <span className="mb-3">$ {product.price}</span>
            </p>
          </div>
          <div className="single-item-caption mt-2 ml-5">
            <a className="add-to-cart pull-left"><i className="fa fa-shopping-cart" /></a>
            <NavLink to={`/products/${product.id}/productdetail`}>
              <button className="beta-btn primary">
                Details <i className="fa fa-chevron-right" />
              </button>
              <div className="clearfix" />
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllProduct;
