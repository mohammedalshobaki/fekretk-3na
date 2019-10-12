import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
import Loader  from './Loader';
 class Testimonials extends Component{
 render (){
    return (
            <div  className = "App" >
                 <Loader/>
              <main class="site-wrapper">
            <div class="pt-table">
                <div class="pt-tablecell page-quotes relative">
                  
                    <Link to="./" class="page-close"><i class="tf-ion-close"></i></Link>
                   
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div class="page-title text-center">
                                    <h2>My <span class="primary">clients</span><span class="title-bg">Speech</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                </div>
                            </div>
                        </div>  
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="testimonials">
                                    <div class="item clear">
                                        <figure class="thumb">
                                            <div class="tm-hex" >
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                            <figcaption>
                                                <h4>Adam Drigan</h4>
                                                <span>CEO, Ultra Solution</span>
                                            </figcaption>
                                        </figure>
                                        <div class="text">
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima. </p>
                                        </div>
                                    </div>
                                    <div class="item clear">
                                        <figure class="thumb">
                                            <div class="tm-hex" >
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                            <figcaption>
                                                <h4>Adam Drigan</h4>
                                                <span>CEO, Ultra Solution</span>
                                            </figcaption>
                                        </figure>
                                        <div class="text">
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima. </p>
                                        </div>
                                    </div>
                                    <div class="item clear">
                                        <figure class="thumb">
                                            <div class="tm-hex"  >
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                            <figcaption>
                                                <h4>Adam Drigan</h4>
                                                <span>CEO, Ultra Solution</span>
                                            </figcaption>
                                        </figure>
                                        <div class="text">
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima. </p>
                                        </div>
                                    </div>
                                    <div class="item clear">
                                        <figure class="thumb">
                                            <div class="tm-hex" >
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                            <figcaption>
                                                <h4>Adam Drigan</h4>
                                                <span>CEO, Ultra Solution</span>
                                            </figcaption>
                                        </figure>
                                        <div class="text">
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima. </p>
                                        </div>
                                    </div>
                                    <div class="item clear">
                                        <figure class="thumb">
                                            <div class="tm-hex" >
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                            <figcaption>
                                                <h4>Adam Drigan</h4>
                                                <span>CEO, Ultra Solution</span>
                                            </figcaption>
                                        </figure>
                                        <div class="text">
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima. </p>
                                        </div>
                                    </div>
                                    <div class="item clear">
                                        <figure class="thumb">
                                            <div class="tm-hex"  >
                                                <div class="hexTop"></div>
                                                <div class="hexBottom"></div>
                                            </div>
                                            <figcaption>
                                                <h4>Adam Drigan</h4>
                                                <span>CEO, Ultra Solution</span>
                                            </figcaption>
                                        </figure>
                                        <div class="text">
                                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                    <br/><br/>
                    <nav class="page-nav clear">
                        <div class="container">
                            <div class="flex flex-middle space-between">
                                <span class="prev-page"><Link to="/works" class="link">&larr; Prev Page</Link></span>
                                <span class="copyright hidden-xs">Copyright &copy; 2019 Fekretk-3na, All Rights Reserved.</span>
                                <span class="next-page"><Link to="/contact" class="link">Next Page &rarr;</Link></span>
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
export default Testimonials;
