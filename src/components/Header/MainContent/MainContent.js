import React from 'react';
import './Maincontent.css';
import image from '../../../images/image 11.png'
import {Link} from 'react-router-dom';
const MainContent = () => {
    return (
        <div className="row  mainHeader  ">

            <div className="col-md-5 ml-5">
                <h5>MY NAME IS MD. DULAL MIAH</h5>

                <h3> I Am A <span className="textDesign" style={{color:'green'}}></span> And Creative UI/UX Designer From Bangladesh </h3>

                <p>I'm a Front-End Developer .I have serious passion for UI effects, animations and 
                    creating intuitive, dynamic user experiences. I love JavaScript . Let's make something special. </p>
                    < a href="https://drive.google.com/file/d/1ijBkeNNSbEaIx_odL3XXNJvA18bb6_ZE/view?usp=sharing" target="_blank">    
                <button className="btn btn-danger">Download Resume</button>
                </a> 
            </div>


            <div className="col-md-6">
                <img src={image} alt="" srcset="" className="img-fluid "/>
            </div>
            
        </div>
    );
};

export default MainContent;