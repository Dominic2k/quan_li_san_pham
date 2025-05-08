import React from 'react';
import Slide from './layout_page/Slide.js';
import Header from './layout_page/Header.js';
import Footer from './layout_page/Footer.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Introduce() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div id="content">
          <div>
            <div className="space50">&nbsp;</div>
            <div className="space50">&nbsp;</div>
            <h2 className="text-center wow fadeInDown animated" style={{visibility: 'visible'}}>Món quà lớn nhất của chúng tôi là có được sự hài lòng của quý khách</h2>
            <div className="space20">&nbsp;</div>
            <p className="text-center wow fadeInLeft animated" style={{visibility: 'visible'}}>Đói thì phải ăn, khát thì phải uống. Các nhà khoa học gọi đó là Định Luật Bảo Toàn Tính Mạng</p>
            <div className="space35">&nbsp;</div>
            <div className="row">
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-user" /></p>
                  <p className="beta-counter-value timer numbers" data-to={19855} data-speed={2000}>19,855</p>
                  <p className="beta-counter-title">Clients Satisfied</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-picture-o" /></p>
                  <p className="beta-counter-value timer numbers" data-to={3568} data-speed={2000}>3,568</p>
                  <p className="beta-counter-title">Amazing Works</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-clock-o" /></p>
                  <p className="beta-counter-value timer numbers" data-to={258934} data-speed={2000}>258,934</p>
                  <p className="beta-counter-title">Support Hours</p>
                </div>
              </div>
              <div className="col-sm-2 col-sm-push-2">
                <div className="beta-counter">
                  <p className="beta-counter-icon"><i className="fa fa-pencil" /></p>
                  <p className="beta-counter-value timer numbers" data-to={150} data-speed={2000}>150</p>
                  <p className="beta-counter-title">New Projects</p>
                </div>
              </div>
            </div> {/* .beta-counter block end */}
            <div className="space50">&nbsp;</div>
            <hr />
            <div className="space50">&nbsp;</div>
            <h2 className="text-center wow fadeInDownwow fadeInDown animated" style={{visibility: 'visible'}}>Đội ngũ của chúng tôi</h2>
            <div className="space20">&nbsp;</div>
            <h5 className="text-center other-title wow fadeInLeft animated" style={{visibility: 'visible'}}>Founders</h5>
            <p className="text-center wow fadeInRight animated" style={{visibility: 'visible'}}>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.</p>
            <div className="space20">&nbsp;</div>
            <div className="row">
              <div className="col-sm-6 wow fadeInLeft animated" style={{visibility: 'visible'}}>
                <div className="beta-person media">
                  <img width ="300" height="300" className="pull-left" src="https://cdn.tgdd.vn/Files/2022/02/21/1416573/bill-gates_1280x720-800-resize.jpg" alt="" />
                  <div className="media-body beta-person-body">
                    <h5>Phan Văn Thông</h5>
                    <p className="font-large">Founder</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 wow fadeInRight animated" style={{visibility: 'visible'}}>
                <div className="beta-person media ">
                  <img width="300" height="300" className="pull-left" src="https://bizweb.dktcdn.net/100/202/714/articles/2016126162839167.jpg?v=1493006293207" alt="" />
                  <div className="media-body beta-person-body">
                    <h5>Hoàng Đạt</h5>
                    <p className="font-large">Founder</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit asatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque por quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space60">&nbsp;</div>
            <h5 className="text-center other-title wow fadeInDown animated" style={{visibility: 'visible'}}>Thành viên</h5>
            <p className="text-center wow fadeInUp animated" style={{visibility: 'visible'}}>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia <br />consequuntur magni dolores.</p>
            <div className="space20">&nbsp;</div>
            <div className="row">
              <div className="col-sm-3">
                <div className="beta-person beta-person-full">
                  <div className="bets-img-hover">
                    <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/37749370_1890435077922841_3688431438933262336_n.jpg?_nc_cat=108&_nc_oc=AQm_LeEi65OADucRRnlDmKKvZBD9V5t_h4WLtZwcfUUFrixiMSVDwdF7hvX6oTBAu_0&_nc_ht=scontent.fsgn2-3.fna&oh=a5c8b4a326a0cf56343627dc2d62bf2b&oe=5E53E5A3" alt="" />
                  </div>
                  <div className="beta-person-body">
                    <h5>Phan Văn Thông</h5>
                    <p className="font-large">Web developer</p>
                    <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="beta-person beta-person-full">
                  <div className="bets-img-hover">
                    <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/24231729_2073160012912695_6624463027151426330_n.jpg?_nc_cat=103&_nc_oc=AQnHulQS0uHuH0EvOa2DgeBtAv7H7q62BfHK68Qp69qUs7mb3tQs25HlmKn-Ee_1ZiU&_nc_ht=scontent.fsgn2-2.fna&oh=a3e393c1707487d45c93093188ec6313&oe=5E524655" alt="" />
                  </div>
                  <div className="beta-person-body">
                    <h5>Huỳnh Tấn Hoàng Đạt</h5>
                    <p className="font-large">Web developer</p>
                    <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="beta-person beta-person-full">
                  <div className="bets-img-hover">
                    <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/22549607_2004595326445915_6331122785871597804_n.jpg?_nc_cat=105&_nc_oc=AQllupppb72H5dyMu6sqTRpjQWGLsGl1bY6-VXmxwjaGxWLRcoURsM48uL4mFGyFMSo&_nc_ht=scontent.fsgn2-1.fna&oh=6b740e0bb17a23981ab18e60abba671d&oe=5E5298AF" alt="" />
                  </div>
                  <div className="beta-person-body">
                    <h5>Lê Thị Anh Đào</h5>
                    <p className="font-large">Web developer</p>
                    <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="beta-person beta-person-full">
                  <div className="bets-img-hover">  
                    <img src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/43878466_1902900516686517_5358888191946391552_n.jpg?_nc_cat=103&_nc_oc=AQn6Oi4yub9QGlklhftR3l1af7hcQzbZ6rDOP0GJjb_YSzbFgaEOOPzSzuhvi_uhsCU&_nc_ht=scontent.fsgn2-2.fna&oh=ddcc9c21fa868e3252c208e5068c27fe&oe=5E49F11B" alt="" />
                  </div>
                  <div className="beta-person-body">
                    <h5>Trịnh Tấn Duy Vương</h5>
                    <p className="font-large">Web developer</p>
                    <p>Nemo enims voluptatem quia volupas sit aspe aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                    <a href="single_type_gallery.html">View projects <i className="fa fa-chevron-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Introduce;
