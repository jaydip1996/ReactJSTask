import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import logoImg from "../../assets/images/Menu_Logo_PackitUp.png"

class NavBar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-brand" href="#">
                        <img className="img-fluid w-25" src={logoImg} alt={"logoImg"} />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="nav-item nav-link active ml-3 font-weight-bold" to="/">Home<span
                                className="sr-only">(current)</span></Link>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="nav-item nav-link active ml-3 font-weight-bold" to="/About">About<span
                                className="sr-only">(current)</span></Link>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="nav-item nav-link active ml-3 font-weight-bold" to="/ForBusiness">For Business<span
                                className="sr-only">(current)</span></Link>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="nav-item nav-link active ml-3 font-weight-bold" to="/Partners">Partners<span
                                className="sr-only">(current)</span></Link>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="nav-item nav-link active ml-3 font-weight-bold" to="/Contact">Contact<span
                                className="sr-only">(current)</span></Link>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="nav-item nav-link active ml-3 font-weight-bold" to="Blog">Blog <span
                                className="sr-only">(current)</span></Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;