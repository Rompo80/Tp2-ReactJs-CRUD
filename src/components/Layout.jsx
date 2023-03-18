import { Link } from 'react-router-dom';
import React from "react";
import PropTypes from "prop-types";

const Layout = (props) => {

   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-xxl">
                    <Link to="/movies" className="navbar-brand fs-2">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                  
                    <Link to="/" className="nav-link fs-3">About</Link>
                    </div>
                    </div>
                </div>
            </nav>
    </div>
   )
};
   
Layout.defaultProps = {
    title: 'moviePick'
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Layout;






                
           
                 
            
          


      
   

          

            
           
    



