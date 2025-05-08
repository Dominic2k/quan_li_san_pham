import React, {Component} from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ProDetailAdmin extends Component {
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
 	var { products } = this.state;
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
        <div className="col-sm-4">
          <img src={this.state.products.image} height="300" width="300" alt="" />
        </div>
        <div className="col-sm-8">
          <div className="single-item-body">
            <h2 className="single-item-title">{this.state.products.name}</h2>
            <p className="single-item-price">
              <span>${this.state.products.price}</span>
            </p>
          </div>
          <div className="clearfix" />
          <p>Màu bánh :</p>
          <div className="single-item-options">
            <h2 className="single-item-title">{this.state.products.color}</h2>
            <div className="clearfix" />
          </div>
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
            </div>
          </div>
        </div>
      	</div>
        </React.Fragment>   	
   		);
	}
}

export default ProDetailAdmin;