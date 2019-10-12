import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
 
const Footer = () =>{
    return(
        <div className ="App">
            <nav class="page-nav clear">
                        <div class="container">
                            <div class="flex flex-middle space-between">
                                <span class="prev-page"><Link to="./" class="link">&larr; Prev Page</Link></span>
                                <span class="copyright hidden-xs">Copyright &copy; 2019 Fekretk-3na, All Rights Reserved.</span>
                                <span class="next-page"><Link to="/about" class="link">Next Page &rarr;</Link></span>
                            </div>
                        </div>
                      
                    </nav>
        </div>
    )
}
export default Footer;
