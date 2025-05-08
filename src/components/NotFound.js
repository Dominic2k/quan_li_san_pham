import React, {Component} from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class NotFound extends Component {
	
 render() {

  	return (
      <React.Fragment>
      <Header />
  		<div className="container">
          <h1 className="text-center text-danger mt-5 mb-5">
              404- Không tìm thấy trang !
          </h1>
      </div>
      <Footer />
      </React.Fragment>  
   		);
	}
}

export default NotFound;