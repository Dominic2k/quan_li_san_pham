import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/products/${id}`)
        .then(res => {
          setProduct(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      <div className="mt-2">
        <Slide />
      </div>
      <div className="container mb-5 mt-5">
        <h4 className="txtdeepshadow text-center text-danger mb-5">Chi tiết Sản phẩm</h4>
        <div className="row">
          <div className="col-sm-4">
            <img src={product.image} height="300" width="300" alt="" />
          </div>
          <div className="col-sm-3">
            <div className="single-item-body">
              <h2 className="single-item-title">{product.name}</h2>
              <p className="single-item-price">
                <span>${product.price}</span>
              </p>
            </div>
            <div className="space20">&nbsp;</div>
            <p>Nguyên liệu:</p>
            <div className="single-item-options">
              <h2 className="single-item-title">{product.material}</h2>
            </div>
            <p>Xuất xứ:</p>
            <div className="single-item-options">
              <h2 className="single-item-title">{product.origin}</h2>
            </div>
            <p>Hạn sử dụng:</p>
            <div className="single-item-options">
              <h2 className="single-item-title">{product.expiry_date}</h2>
            </div>
          </div>
          <div className="line"></div>
          <div className="col-sm-4">
            <div className="widget">
              <h3 className="widget-title txtdeepshadow text-danger text-center">Baker Alley's Cake</h3>
              <div className="widget-body">
                <div className="beta-sales beta-lists">
                  <div className="media beta-sales-item">
                    <a className="pull-left" href="product.html">
                      <img src="assets/dest/images/products/sales/1.png" alt="" />
                    </a>
                    <div className="media-body">Chất lượng đảm bảo</div>
                  </div>
                  <div className="media beta-sales-item">
                    <a className="pull-left" href="product.html">
                      <img src="assets/dest/images/products/sales/2.png" alt="" />
                    </a>
                    <div className="media-body">Uy tín đặt lên hàng đầu</div>
                  </div>
                  <div className="media beta-sales-item">
                    <a className="pull-left" href="product.html">
                      <img src="assets/dest/images/products/sales/2.png" alt="" />
                    </a>
                    <div className="media-body">Giá cả phải chăng</div>
                  </div>
                  <div className="media beta-sales-item">
                    <a className="pull-left" href="product.html">
                      <img src="assets/dest/images/products/sales/2.png" alt="" />
                    </a>
                    <div className="media-body">Cam kết đảm bảo vệ sinh an toàn thực phẩm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="woocommerce-tabs">
          <ul className="tabs">
            <li className="active">
              <a>Mô tả</a>
            </li>
            <li>
              <a>Reviews (0)</a>
            </li>
          </ul>
          <div className="panel" id="tab-description" style={{ display: "block" }}>
            <p>{product.description}</p>
          </div>
          <div className="panel" style={{ display: "none" }}>
            <p>No Reviews</p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default ProductDetail;
