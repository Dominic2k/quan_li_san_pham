import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
class Wrapper extends Component {

 render() {
  	return (
 <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <p className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon">
            <i className="fas fa-burger-soda" aria-hidden="true" />
          </div>
          <div className="sidebar-brand-text mx-3">Final Project<sup /></div>
        </p>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <p className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></p>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Interface
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
        <NavLink to="/product-list">
          <p className="nav-link collapsed" >
            <i className="fas fa-coffee" />
            <span>Products List</span>
          </p>
        </NavLink>
          
        </li>
        <li className="nav-item">
        <NavLink to="/contact-list">
          <p className="nav-link collapsed" >
            <i className="fas fa-comments" />
            <span>Contacts List</span>
          </p>
        </NavLink>
          
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
         <li className="nav-item">
        <NavLink to="/">
          <p className="nav-link collapsed" >
            <i className="fas fa-shipping-fast" />
            <span>Go to Pages</span>
          </p>
        </NavLink>
          
        </li>
      </ul>
   		);
	}
}

export default Wrapper;