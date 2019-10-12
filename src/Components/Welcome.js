import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
import Loader  from './Loader';

class Welcome extends React.Component{

	render(){
        
		return (
		<div className="App">
            <Loader />

              <main class="site-wrapper">
            <div class="pt-table">
                <div class="pt-tablecell page-welcome relative">
                  
                    <Link to="./" class="page-close"><i class="tf-ion-close"></i></Link>
                  
                    <div class="author-image-large">
                        <img   src=  {require('../img/author.png')}  alt=""/>
                       
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-7">
                                <div class="page-title">
                                    <h2>Mohammed <span class="primary">Alshobaki</span> <span class="title-bg">About</span></h2>
                                    <p>A product designer from England, who focuses on interactive design & A freelance designer focusing on typography & clean interfaces. Also works in Google..</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus corporis, tenetur inventore perferendis reprehenderit autem dignissimos non quos unde eveniet sapiente necessitatibus consequuntur ea ab dolore, minus nam eaque.</p>
                                </div>
                            </div>
                        </div>  
                    </div>  
                    <br/><br/>
                   
                   
                </div> 
            </div> 
         </main> 
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
}
export default Welcome