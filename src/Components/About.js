import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
import Loader  from './Loader';
const About = () =>{
    return(
        <div className ="App">
            <Loader/>
        <main className="site-wrapper">
            <div className="pt-table">
                <div className="pt-tablecell page-about relative">
                    
                    <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>
                     
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div className="page-title text-center">
                                    <h2>About <span className="primary">Us</span> <span className="title-bg">Name</span></h2>
                                    <p>Keep in mind: when you start a new project, it's essential to choose the right road to move forward. Thankfully, we've been there before, and we know where to turn on a highway.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="about-author">
                                    <figure className="author-thumb">
                                    <i className = "fa fa-info" ></i>
                                    </figure> 
                                    <div className="author-desc">
                                    We are a group of freelancers from Jordan with vast experience in the field of programming.
                                    </div>
                                   
                                </div>  
                                <p>Design and programming is our playground. While we create an awesome experience, we like having fun. No animals were harmed, no bridges were burned during our parties.</p>
                                <h2>Call with us today!</h2>
                                <div className = "about-contact">
                                    
                                <p>
                                       
                                        <a href ="mailto:mohammed.alshobaki96@gmail.com"> <i className = "fa fa-envelope"> </i>  mohammed.alshobaki96@gmail.com </a>
                                       <br/>
                                        <a href ="tel:+962791191836"> <i className = "fa fa-mobile"> </i> +962791191836</a>
                                    </p>
                                    <p>
                                        <i className = "fa fa-envelope"> </i>
                                        <a href ="mailto:adelnasim1996@gmail.com "> adelnasim1996@gmail.com </a>
                                        <br/>
                                        <a href ="tel:+962795061977"> <i className = "fa fa-mobile"> </i> +962795061977</a>

                                                     </p>
                                </div>
                            </div>  
                            <div className="col-xs-12 col-md-6">
                                 
                              
                                 <img  className = "about-img" src=  {require('../img/about.jpg')}  alt="" />
                                
                            </div> 
                        </div>  
                    </div> 
                    <nav className="page-nav clear">
                        <div className="container">
                            <div className="flex flex-middle space-between">
                                <span className="prev-page"><Link to="/welcome" className="link">&larr; Prev Page</Link></span>
                                <span className="copyright hidden-xs">Copyright &copy; 2019 Fekretk-3na, All Rights Reserved.</span>
                                <span className="next-page"><Link to="/services" className="link">Next Page &rarr;</Link></span>
                            </div>
                        </div>
                   
                    </nav>
                    
                </div>  
            </div>  
        </main>  
        </div>
    )
}
export default About;
