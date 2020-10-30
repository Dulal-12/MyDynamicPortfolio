import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import './ProjectDetail.css';
import Navbar from '../Header/Navbar/Navbar';
const ProjectDetail = () => {
    return (
       <div>
          <Navbar></Navbar>
            <div className="row ml-5 mt-5 mb-5 projectdetails">
                   <div className="col-md-6 col-sm-3">
                        <h1 className="m-4">Creative Agency</h1>
                        <ul className=" font-weight-bold  ml-5">
                           <li className="mb-3">A full-stack agency service app where you can take services like graphics design, web development etc. </li>
                           <li className="mb-3">User can add review . </li>
                           <li className="mb-3">Admin can add new service and also add new admin.</li>
                           <li className="mb-3">This site fully responsive . </li>
                           <li className="mb-3">Admin can see all the user details. </li>
                        </ul>
                     <div className="ml-5">
                           <h3 >Technology</h3>
                           <p>ReactJs, ReactRouter, Firebase , Mongodb , NodeJs, ExpressJs, JavaScript, Bootstrap , CSS3, HTML </p>
                     </div>
                        <div className="ml-5">
                           <h3 >Link</h3>
                           <p><a href="https://creative-agency-d876c.web.app/" target="_blank">Live Link</a></p>
                           <p><a href="https://github.com/Dulal-12/agent-client" target="_blank">Github Client Code</a></p>
                           <p><a href="https://github.com/Dulal-12/agent--server" target="_blank">Github Server Code</a></p>
                        </div>
                      </div>
                     <div className="col-md-5 col-sm-6">
                           <div class="card p-5">
                                 <img src={project1} alt="" srcset="" class="card-img-top img-fluid" />
                           </div>
                     </div>
               </div>
               


        <div className="row ml-5 mt-5 mb-5 projectdetails">
                  <div className="col-md-6 col-sm-3">
                     <h1 className="m-4">Volunteer Network</h1>
                     <ul className=" font-weight-bold ml-5  ">
                        <li className="mb-3">A full stack website where several events is open and a volunteer can join any event by registration.  </li>
                        <li className="mb-3">A volunteer can see his/her event . </li>
                        <li className="mb-3">Here use firebase login system. </li>
                        <li className="mb-3">Volunteer can delete his/her event also. </li>
                        <li className="mb-3">Admin can see all volunteer details in his /her dashboard. </li>
                     </ul>

                  <div className="ml-5">
                     <h3 >Technology</h3>
                     <p>ReactJs, ReactRouter, Firebase , Mongodb , NodeJs, ExpressJs, JavaScript, Bootstrap , CSS3, HTML </p>
                  </div>
                  <div className="ml-5">
                     <h3>Link</h3>
                     <p><a href="https://databasepractice-628c8.web.app/" target="_blank">Live Link</a></p>
                     <p><a href="github.com/Dulal-12/volunteer" target="_blank">Github Client Code</a></p>
                     <p><a href="https://github.com/Dulal-12/volunteer-server" target="_blank">Github Server Code</a></p>
                  </div>
                  </div>

                  <div className="col-md-5 col-sm-6">
                        <div class="card p-5">
                              <img src={project2} alt="" srcset="" class="card-img-top img-fluid" />
                        </div>
                  </div>
            </div>


            <div className="row ml-5 mt-5 mb-5 projectdetails">
                  <div className="col-md-6 col-sm-3">
                     <h1 className="m-4">Panda Ecommerce</h1>
                     <ul className=" font-weight-bold ml-5  ">
                        <li className="mb-3">This site is fully responsive. </li>
                        <li className="mb-3">Customer can see product. </li>
                        <li className="mb-3">Next time , I am using JavaScript for functionality. </li>
                        <li className="mb-3">When customer can buy a product.</li>
                        <li className="mb-3">Too happy..... </li>
                     </ul>

                  <div className="ml-5">
                     <h3 >Technology</h3>
                     <p> Bootstrap , CSS3, HTML </p>
                  </div>
                  <div className="ml-5">
                     <h3>Link</h3>
                     <p><a href="https://dulal-12.github.io/panda-ecommerce/" target="_blank">Live Link</a></p>
                     <p><a href="https://github.com/Dulal-12/panda-ecommerce" target="_blank">Github  Code</a></p>
                     
                  </div>
                  </div>

                  <div className="col-md-5 col-sm-6">
                        <div class="card p-5">
                              <img src={project3} alt="" srcset="" class="card-img-top img-fluid" />
                        </div>
                  </div>
            </div>
            </div>
    );
};

export default ProjectDetail;