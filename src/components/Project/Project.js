import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import './Project.css';
import {Link} from 'react-router-dom';

const Project = () => {
  return (
    <div>
     
       <div className="container">
      
              <div className="row">
                    <div className="col-md-12 text-center mt-5">
                      <h3>PROJECTS</h3>
                    </div>
              </div>

      <div className="row">
            <div className="col-md-12">
                  <div className="row m-5">
                        <div className="container ">
                            <div class="card-deck mb-5">
                                           <div class="card p-5">
                                                 <img src={project1} alt="" srcset="" class="card-img-top" />
                                              <div class="card-body">
                                              <Link to="/project"> <h5 class="card-title text-center">Creative Agency</h5></Link>
                                              </div>
                                              </div>
                                              <div class="card p-5">
                                                    <img src={project2} alt="" srcset="" class="card-img-top" />
                                                    <div class="card-body">
                                                    <Link to="/project"> <h5 class="card-title text-center">Volunteer Network</h5></Link>
                                                </div>
                                                </div>
                                                    <div class="card p-5">
                                                    <img src={project3} alt="" srcset="" class="card-img-top" />
                                                    <div class="card-body">
                                                    <Link to="/project"> <h5 class="card-title text-center">Panda Ecommerce</h5></Link>
                                                  </div>
                                                       </div>
                                                            </div>
                                                                </div>
                                                                   </div>
                                                                         </div>
                                                                               </div>

      <div className="row">
              <div className="col-md-12 mb-5 text-center expert">
              <h3 className="mb-5">EXPERT</h3>
                  <ul>
                    <li>Striking a balance between functional and aesthetic design.</li>
                    <li> Build reusable code for future use. </li>
                    <li>Make sure web pages are optimized for best speed and scalability.</li>
                    <li>Keep the brand consist throughout the whole design.</li>
                    <li>Make sure the web design is smartphone-capable. </li>
                  </ul>
     </div>
      </div>
      </div>
    </div>
  );
}

export default Project;