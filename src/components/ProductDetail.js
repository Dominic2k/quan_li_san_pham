import React, {Component} from 'react';
import axios from 'axios';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
class ProductDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : []
        }
    }    
    componentDidMount(){
      var {match} = this.props;
      if (match) {
      	var id = match.params.id;
      	axios({
        method: 'GET',
        url :`http://localhost:3001/products/${id}`,
        data : null
     	 }).then(res =>{
     	 	var data =res.data;
        	this.setState({
         	 products :res.data
        	});
      		}).catch( err =>{
        	console.log(err);
      		});
    	}
      }
 render() {
 	var {products} = this.state;
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
          <img src={this.state.products.image} height="300" width="300" alt="" />
        </div>
        <div className="col-sm-3">
          <div className="single-item-body">
            <h2 className="single-item-title">{this.state.products.name}</h2>
            <p className="single-item-price">
              <span>${this.state.products.price}</span>
            </p>
          </div>
          <div className="clearfix" />
          <div className="space20">&nbsp;</div>
          <p>Nguyên liệu:</p>
          <div className="single-item-options">
            <h2 className="single-item-title">{this.state.products.material}</h2>
            <div className="clearfix" />
          </div>
          <p>Xuất xứ:</p>
          <div className="single-item-options">
            <h2 className="single-item-title">{this.state.products.origin}</h2>
            <div className="clearfix" />
          </div>
          <p>Hạn sữ dụng:</p>
          <div className="single-item-options">
            <h2 className="single-item-title">{this.state.products.expiry_date}</h2>
            <div className="clearfix" />
          </div>
        </div>
        <div className="line"></div>
        <div className="col-sm-4">
          <div className="widget">
        <h3 className="widget-title txtdeepshadow text-danger text-center">Baker Alley's Cake</h3>
        <div className="widget-body">
          <div className="beta-sales beta-lists">
            <div className="media beta-sales-item">
              <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/1.png" alt="" /></a>
              <div className="media-body">
                Chất lượng đảm bảo
              </div>
            </div>
            <div className="media beta-sales-item">
              <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/2.png" alt="" /></a>
              <div className="media-body">
                Uy tín đặt lên hàng đầu
              </div>
            </div>
            <div className="media beta-sales-item">
              <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/2.png" alt="" /></a>
              <div className="media-body">
                Giá cả phải chăng
              </div>
            </div>
            <div className="media beta-sales-item">
              <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/2.png" alt="" /></a>
              <div className="media-body">
                Cam kết đảm bảo vệ sinh an toàn thực tập
              </div>
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
              <li className>
                <a>Reviews (0)</a>
              </li>
            </ul>
            <div className="panel" id="tab-description" style={{ display: "block" }}>
              <p>
                {this.state.products.description}
              </p>
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
}

export default ProductDetail;