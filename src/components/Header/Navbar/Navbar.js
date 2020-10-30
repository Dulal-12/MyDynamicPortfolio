import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="row mb-5">
              <div className="col-md-12 navbar ">
                     <nav className="ml-auto">
                       <ul>
                          <Link to="/"> <li className="mr-5">Home</li></Link>
                          <Link to="/contact"><li className="mr-5">Contact</li></Link>
                          <Link to="/blog"> <li className="mr-5">Blogs</li></Link>
                          <Link to="/project"><li className="">Projects</li></Link>
                        </ul> 
                      </nav>
              </div>
        </div>
    );
};

export default Navbar;