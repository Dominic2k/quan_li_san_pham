import React, {Component} from 'react';

class Footer extends Component {

 render() {
  	return (
  		<div id="footer" className="color-div">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="widget">
                <h4 className="widget-title">Instagram Feed</h4>
                <div id="beta-instagram-feed"><div /></div>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="widget">
                <h4 className="widget-title">Information</h4>
                <div>
                  <ul>
                    <li><a href="blog_fullwidth_2col.html"><i className="fa fa-chevron-right" /> Web Design</a></li>
                    <li><a href="blog_fullwidth_2col.html"><i className="fa fa-chevron-right" /> Web development</a></li>
                    <li><a href="blog_fullwidth_2col.html"><i className="fa fa-chevron-right" /> Marketing</a></li>
                    <li><a href="blog_fullwidth_2col.html"><i className="fa fa-chevron-right" /> Tips</a></li>
                    <li><a href="blog_fullwidth_2col.html"><i className="fa fa-chevron-right" /> Resources</a></li>
                    <li><a href="blog_fullwidth_2col.html"><i className="fa fa-chevron-right" /> Illustrations</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="col-sm-10">
                <div className="widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <div>
                    <div className="contact-info">
                      <i className="fa fa-map-marker" />
                      <p>30 South Park Avenue San Francisco, CA 94108 Phone: +78 123 456 78</p>
                      <p>Nemo enim ipsam voluptatem quia voluptas sit asnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="widget">
                <h4 className="widget-title">Newsletter Subscribe</h4>
                <form action="#" method="post">
                  <input type="email" name="your_email" />
                  <button className="pull-right" type="submit">Subscribe <i className="fa fa-chevron-right" /></button>
                </form>
              </div>
            </div>
          </div> {/* .row */}
        </div> {/* .container */}
      </div>
      
   		);
	}
}

export default Footer;