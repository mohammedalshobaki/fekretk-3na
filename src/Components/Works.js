import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
import Loader  from './Loader';
 

class Works extends Component{
 render (){
    return (
            <div  className  = "App" >
           <Loader/>
      <main class="site-wrapper">
            <div class="pt-table">
                <div class="pt-tablecell page-works relative">
                  
                    <Link to="./" class="page-close"><i class="tf-ion-close">    </i></Link>
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div class="page-title text-center">
                                    <h2>My <span class="primary">works</span> <span class="title-bg">works</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                        </div>  
                    
                        <div class="row isotope-gutter">
                            <div class="col-xs-12 col-sm-6 col-md-4 Photoshop Illustrator">
                                <figure class="works-item">
                                     <img  src=  {require('../img/works/1.jpg')}  alt="" />
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4>Project Name</h4>
                                        <p>Illustration, Digital Art</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 Illustrator">
                                <figure class="works-item">
                                    <img  src=  {require('../img/works/2.jpg')}  alt="" />
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4>Project Name</h4>
                                        <p>Illustration, Digital Art</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 Indesign Photoshop">
                                <figure class="works-item">
                                    <img  src=  {require('../img/works/3.jpg')}   alt="" />
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4>Project Name</h4>
                                        <p>Illustration, Digital Art</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 Artworks Illustrator">
                                <figure class="works-item">
                                    <img src=  {require('../img/works/4.jpg')} alt="" />
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4>Project Name</h4>
                                        <p>Illustration, Digital Art</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-4 Photoshop">
                                <figure class="works-item">
                             
                                    <img  src=  {require('../img/works/5.jpg')}   alt="" />
                                    <div class="overlay"></div>
                                    <figcaption class="works-inner">
                                        <h4>Project Name</h4>
                                        <p>Illustration, Digital Art</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div> 
                    </div>  
                    <br/><br/>
                    <nav className="page-nav clear">
                        <div className="container">
                            <div className="flex flex-middle space-between">
                                <span className="prev-page"><Link to="/resume" className="link">&larr; Prev Page</Link></span>
                                <span className="copyright hidden-xs">Copyright &copy; 2016 Phantom, All Rights Reserved.</span>
                                <span className="next-page"><Link to="/testimonials" className="link">Next Page &rarr;</Link></span>
                            </div>
                        </div>
                    
                    </nav>
                </div>  
            </div> 
        </main> 
            </div>
        )
    
        
    }
}
export default Works;
