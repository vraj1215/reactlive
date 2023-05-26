import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
export default function Navbar(props) {
    

    return (
        <div>

            <nav className={`navbar navbar-expand-lg  navbar bg-${props.cl.mode}`} data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#'>{props.about}</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                        <div className='d-flex'>
                            <div className='bg-dark rounded mx-2' style={{height:"30px",width:"30px",cursor:"pointer"}}  onClick={props.togglemode.dark}></div>
                            <div className='bg-success rounded mx-2' style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={props.togglemode.success}></div>
                            <div className='bg-light rounded mx-2' style={{height:"30px",width:"30px",cursor:"pointer"}} onClick={props.togglemode.light}></div>
                            


                        </div>
                        {/* <div className="form-check form-switch">
                            <input  className="form-check-input mx-1" style={{cursor:"pointer"}} type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
                            <label className={`"form-check-label "`} style={{color:"red"}} htmlFor="flexSwitchCheckDefault">switch mode</label>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string, mode: PropTypes.string.isRequired }
Navbar.defaultProps = {
    title: "set title here"
    , about: "about us"
}