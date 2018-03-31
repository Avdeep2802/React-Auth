import React from 'react';
import {Link} from 'react-router';


export default () => {


    return(
      <nav className="navbar navbar-inverse bg-inverse">

        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">HARWIN</a>
          </div>


          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="signin">Sign In</Link></li>
              <li><Link to="signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
    </nav>
    );

}
