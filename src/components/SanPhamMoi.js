import React, {Component} from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class AllProduct extends Component {
   constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3001/products',
        data : null
      }).then(res =>{
        this.setState({
          products :res.data
        });
      }).catch( err =>{
      });
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }

    render() {
    var { products,keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
    return (
       <React.Fragment>
        <Header />
        <div className ="container">
                  <div className="row">
        <div className="col-sm-3">
            <ul className="aside-menu mt-5">
              <li>
                <a>Hương vị độc đáo</a>
              </li>
              <li>
                <a>Nguyên liệu thiên nhiên</a>
              </li>
              <li>
                <a>Không chất bảo quản</a>
              </li>
              <li>
                <a>Giá rẻ bất ngờ</a>
              </li>
              <li>
                <a>Đảm bảo an toàn thực phẩm</a>
              </li>
              <li>
                <a>Giao dịch nhanh chóng</a>
              </li>
              <li>
                <a>Giao hàng tận tình</a>
              </li>
            </ul>
        </div>
        <div className="col-sm-9">
              <div className="container mb-5">
                <h2 className="text-danger text-center mt-5">Danh sách sản phẩm MỚI tại cửa hàng</h2>
                <input className="mt-3" name="keyword" value={keyword} onChange ={ this.onChange} type="text"  placeholder="Search.." />
                <div className="row">
                  {search.map((product,index) => {
                    if( product.name_category === 'sản phẩm mới' ){
                      return < Item key={index} product={product} />
                    }
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
}

class Item extends Component {

 render() {
    return (
  <React.Fragment>   
     <div className="col-sm-4 mt-5">
        <div className="single-item">
          <div className="single-item-header">
            <a href="product.html"><img src={this.props.product.image} alt="" height="300" width="700" /></a>
          </div>
          <div className="single-item-body">
            <p className="single-item-title text-center text-danger">{this.props.product.name}</p>
            <p className="single-item-price text-center">
              <span className="mb-3">$ {this.props.product.price}</span>
            </p>
          </div>
          <div className="single-item-caption mt-2 ml-5">
            <a className="add-to-cart pull-left" ><i className="fa fa-shopping-cart" /></a>
            <NavLink to={`/products/${this.props.product.id}/productdetail`}>
                <button className="beta-btn primary">Details <i className="fa fa-chevron-right" /></button>
                <div className="clearfix" />
            </NavLink>
            
          </div>
        </div>
      </div>
    </React.Fragment>
      );
  }
}


export default AllProduct;