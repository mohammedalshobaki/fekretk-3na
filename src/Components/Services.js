import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
import Loader  from './Loader';

const Services = () =>{
    return(
        <div className="App" >
            <Loader/>
          <section className="site-wrapper">
            <div className="pt-table">
                <div className="pt-tablecell page-services relative">
                    <Link to="./" className="page-close"><i className="tf-ion-close"></i></Link>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-offset-1 col-lg-10">
                                <div className="page-title text-center">
                                    <h2>Awesome <span className="primary">Services</span> <span className="title-bg">Services</span></h2>
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica,quam nunc putamus parum claram anteposuerit.</p>
                                </div>
                                <div className="hexagon-menu services clear">
                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-lightbulb"></i>
                                            </div>
                                            <h4>Wordpress <br/> Dev</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>
                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-mobile"></i>
                                            </div>
                                            <h4>React <br/> JS</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>
                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-profile-male"></i>
                                            </div>
                                            <h4>Androind <br/> App</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>
                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-heart"></i>
                                            </div>
                                            <h4>IOS <br/> App</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>

                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-heart"></i>
                                            </div>
                                            <h4>Design</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>

                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-heart"></i>
                                            </div>
                                            <h4>IOS <br/> App</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>


                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-heart"></i>
                                            </div>
                                            <h4>Development</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>


                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-heart"></i>
                                            </div>
                                            <h4>Marketting  </h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>

                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-heart"></i>
                                            </div>
                                            <h4>IOS <br/> App</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>
                                    


                                    <div className="service-hex">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 372 424.5"   space="preserve">
                                            <g>
                                                <polygon className="st0" points="359.9,314.1 186.9,414 14,314.1 14,114.4 186.9,14.6 359.9,114.4"/>
                                                <polygon className="st1" points="331.2,297.6 186.9,380.9 42.6,297.6 42.6,131 186.9,47.6 331.2,131"/>
                                            </g>
                                        </svg>
                                        <div className="content">
                                            <div className="icon">
                                                <i className="et-line icon-hotairballoon"></i>
                                            </div>
                                            <h4>Ready to <br/> launch</h4>
                                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>  
                    </div> 
                    <br/><br/><br/><br/><br/>
                    <nav className="page-nav clear">
                        <div className="container">
                            <div className="flex flex-middle space-between">
                                <span className="prev-page"><Link to="/about" className="link">&larr; Prev Page</Link></span>
                                <span className="copyright hidden-xs">Copyright &copy; 2019 Fekretk-3na, All Rights Reserved.</span>
                                <span className="next-page"><Link to="/resume" className="link">Next Page &rarr;</Link></span>
                            </div>
                        </div>
                    
                    </nav>
                   
                </div> 
            </div>  
        </section>  
        </div> 
    )
}
export default Services;
