import React from 'react';
import './Contact.css';
import Navbar from '../Header/Navbar/Navbar';
const Contact = () => {
    return (
        <div className="container">
                       <Navbar></Navbar>
                        <div className="row contact text-center"> 
                            <div className="col-md-12">
                                <h1 className="ml-5 mb-5 mt-5">About Me</h1>
                            </div>
                        </div>

            <div className="row "> 
                <div className="col-md-8 summary  ml-5  p-5">
                    <h2>I'm Md. Dulal Miah and Web Developer</h2>
                    <p>Assalamu Alikum . Hi!My name is Dulal . I am font-end developer and
                     i'm very passionate and dedicated to my work. <span style={{color:'green'}}>I have acquired the skills
                     and knowledge necessary to make your project a success</span> .I enjoy every step 
                     of the design process from discussion and collaboration  </p>
                </div>
            </div>

            <div className="row"> 
                  <div className="col-md-5 ml-5  p-5 detail">

                      <p><span style={{fontWeight:'1000'}}>Birthday :</span> 19 February 1999</p>
                      <p><span style={{fontWeight:'1000'}}>Degree :</span> B.Sc in CSE</p>
                      <p><span style={{fontWeight:'1000'}}>University :</span>City University</p>
                      <p><span style={{fontWeight:'1000'}}>Address :</span>Kashimpur, Gazipur-sadar , Gazipur</p>
                      < a href="https://drive.google.com/file/d/1ijBkeNNSbEaIx_odL3XXNJvA18bb6_ZE/view?usp=sharing" target="_blank">    
                      <button className="btn btn-danger">Download Resume</button>
                </a> 
            </div>

                  <div className="col-md-5 ml-5  p-5">

                            <p><span style={{fontWeight:'1000'}}>Email :</span> dulalmiah70112@gmail.com</p>
                            <p><span style={{fontWeight:'1000'}}>Linkedin :</span><a href="https://www.linkedin.com/in/md-dulal-miah-0276a81b1/" target="_blank">Profile</a>  </p>
                            <p><span style={{fontWeight:'1000'}}>Github :</span><a href="https://github.com/Dulal-12?tab=repositories" target="_blank">Github Profile</a></p>
                            <p><span style={{fontWeight:'1000'}}>Parmanent Adress :</span>Bokshigonj , Jamalpur</p>
                            <form action="mailto:dulalmiah70112@gmail.com" method="post" enctype="text/plain">
                            <input type="submit" className="sendEmail" value="Send Email"/>
                            </form>
                 </div>
                 </div>


            <div className="row contact text-center"> 
                <div className="col-md-12">
                    <h1 className="ml-5 mb-5 mt-5">Skills</h1>
                </div>
            </div>
           
            <div className="row">
               
                <div className="col-md-8  p-5">
                    <ul className="list">
                        <li className="react p-5">ReactJs</li>
                        <li className="node p-5">NodeJs</li>
                        <li className="Mongo p-5">MongoDB</li>
                        <li className="js p-5">JavaScript</li>
                        <li className="boot p-5">Bootstrap</li>
                        <li className="html p-5">HTML5</li>
                        <li className="css p-5">CSS3</li>
                    </ul>
                </div>
            </div>
             </div>
    );
};

export default Contact;