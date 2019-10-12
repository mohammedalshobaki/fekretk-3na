import React , { Component } from 'react';
import { Link , NavLink } from 'react-router-dom';
import axios from 'axios';
import Loader  from './Loader';
 
class Contact extends Component{
    
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
       // const { fname, lname, email } = this.state;
        const fname  = "Mohammed";
        const lname  = "Mohammed";
        const email  = "Mohammed";


        axios.post('http://alshobaki.getenjoyment.net/phpmailer/fekertk_3na.php', { fname, lname, email })
          .then((result) => {
            //access the results here....
          });
      }
 render (){
    return (
            <div  className = "App" >
          <Loader/>

           <main class="site-wrapper">
            <div class="pt-table">
                <div class="pt-tablecell page-contact relative">
             
                    <Link to="./" class="page-close"><i class="tf-ion-close"></i></Link>
                  
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div class="page-title text-center">
                                    <h2>Get in  <span class="primary">touch</span> <span class="title-bg">Contact</span></h2>
                                    <p>Write to us and we'll get back to you within 24 hours of working!</p>
                                </div>
                            </div>
                        </div>  
                        <div class="row">
                            <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                                <div class="contact-block">
                                    <div class="media">
                                        <div class="media-left">
                                            <i class="tf-envelope2"></i>
                                        </div>
                                        <div class="media-body">
                                            <h4>Email</h4>
                                            <p><Link href="mailto:my_name@gmail.com">my_name@gmail.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                          
                                <div class="contact-block">
                                    <div class="media">
                                        <div class="media-left">
                                            <i class="tf-phone2"></i>
                                        </div>
                                        <div class="media-body">
                                            <h4>Phone</h4>
                                            <p><Link href="tel:+000-1111-2222">+000-1111-2222</Link></p>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="contact-block">
                                    <div class="media">
                                        <div class="media-left">
                                            <i class="tf-mobile"></i>
                                        </div>
                                        <div class="media-body">
                                            <h4>Skype</h4>
                                            <p><a href="./">my_name</a></p>
                                        </div>
                                    </div>
                                </div>
                              
                                <ul class="contact-social">
                                    <li>
                                        <span class="contact-social-hex"></span>
                                        <a href="./"><i class="tf-ion-social-facebook"></i></a>
                                    </li>
                                    <li>
                                        <span class="contact-social-hex"></span>
                                        <a href="./"><i class="tf-ion-social-twitter"></i></a>
                                    </li>
                                    <li>
                                        <span class="contact-social-hex"></span>
                                        <a href="#"><i class="tf-ion-social-google"></i></a>
                                    </li>
                                    <li>
                                        <span class="contact-social-hex"></span>
                                        <a href="./"><i class="tf-ion-social-dribbble"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2">
                                <div class="section-title clear">
                                    <h3>Send me a meesage</h3>
                                    <span class="bar-dark"></span>
                                    <span class="bar-primary"></span>
                                </div>
                                <form id="contact-form" onSubmit={this.onSubmit}  method = "POST"  class="row contact-form no-gutter" action="#" >
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="input-field name">
                                            <span class="input-icon" id="name" ><i class="tf-profile-male"></i></span>
                                            <input type="text" class="form-control"  placeholder="Enter your name"/>
                                        </div>
                                    </div> 
                                    <div class="col-xs-12 col-sm-6">
                                        <div class="input-field email">
                                            <span class= "input-icon" id="email"><i class="tf-envelope2"></i></span>
                                            <input type="email" class="form-control" name="email" placeholder="Your email address" />
                                        </div>
                                    </div> 
                                    <div class="col-xs-12 col-sm-12">
                                        <div class="input-field">
                                            <span class= "input-icon" id="subject"><i class="tf-pricetags"></i></span>
                                            <input type="text" class="form-control" name="subject" placeholder="Enter the discussion title" />
                                        </div>
                                    </div> 
                                    <div class="col-xs-12 col-sm-12">
                                        <div class="input-field message">
                                            <span class= "input-icon" ><i class="tf-pencil2"></i></span>
                                            <textarea name="message" id="message" class="form-control" placeholder="Write your message"/>
                                        </div>
                                    </div> 
                                    <div class="col-xs-12 col-sm-12">
                                        <div class="input-field">
                                            <span class="btn-border">
                                                <button type="submit" class="btn btn-primary contact-btn btn-custom-border text-uppercase">Send Message now</button>
                                            </span>
                                        </div>
                                        <div class="msg-success">Your Message was sent successfully</div>
                                        <div class="msg-failed">Something went wrong, please try again later</div>
                                    </div> 
                                </form>  
                            </div>  
                        </div> 
                    </div> 
                    <br/><br/>
                    <nav class="page-nav clear">
                        <div class="container">
                            <div class="flex flex-middle space-between">
                                <span class="prev-page"><Link to="/testimonials" class="link">&larr; Prev Page</Link></span>
                                <span class="copyright hidden-xs">Copyright &copy; 2019 Fekretk-3na team, All Rights Reserved.</span>
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
export default Contact;
