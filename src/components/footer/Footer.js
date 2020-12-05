import React from 'react';
import { Link } from 'react-router-dom';
import '../footer/Footer.css'

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <h6 className="text-center">Powered By Yogesh Kansal</h6>
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google mr-2" href="http://google.com/+"><i className="fa fa-google-plus"> </i></a>
                        <a className="btn btn-social-icon btn-facebook mr-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"> </i></a>
                        <a className="btn btn-social-icon btn-linkedin mr-2" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"> </i></a>
                        <a className="btn btn-social-icon btn-twitter mr-2" href="http://twitter.com/"><i className="fa fa-twitter"> </i></a>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;