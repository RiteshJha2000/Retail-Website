import React from 'react'
import pic from "../img/logo1.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark fixed-top" style={{backgroundColor:'#ffff',padding:'0'}}>
        {/* rgba(115,72,58,255)  rgba(66,65,70,255) rgba(19,15,15,255) rgb(76 38 31)*/}
      <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={pic} alt="" />
            </a>
            

            <form className="d-flex search" role="search">
                <input className="form-control searchbar" type="search" placeholder="Search" aria-label="Search"/>
                
                <button className="btn btn-outline-success" type="submit" style={{backgroundColor:'rgb(76 38 31)',color:'#fff'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-search"  style={{marginTop:'3px',marginRight:'7px'}}>
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <h6>Search</h6>
                </button>
            </form>
        </div>
        <div className="container-fluid1 ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse tags" id="navbarSupportedContent">

            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#products">PRODUCTS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT US</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">GALLARY</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT US</a>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>
    </>
  )
}
