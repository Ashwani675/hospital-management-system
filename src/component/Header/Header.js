import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  const [show,setShow]=useState(false);

  const showToggler = () =>{
    setShow(!show);
}
  return (
    
    <div>
    <div className='top-headers'>
        <div className="logo">
            <img src='https://www.pngkey.com/png/full/986-9860667_hospital-management-system-png.png' alt="Reload image" />
            <h3>HOSPITAL MANAGEMENT SYSTEM</h3>
        </div>
        <div className="info">
            <div className="info-box">
            <i className="fa-solid fa-phone"></i>
              <div className="info-para">
                <p>+91000000000</p>
                <p>120043007800</p>
              </div>
            </div>
            <div className="info-box">
            <i className="fa-solid fa-envelope"></i>
            <div className="info-para">
              <p>example@gmail.com</p>
              <p>example@gmail.com</p>
            </div>
            </div>
            <div className="info-box">
            <i className="fa-solid fa-location-dot"></i>
            <div className="info-para">
              <p>1339/17 Phase 11</p>
              <p>Mohali , PUNJAB</p>
            </div>
            </div>
        </div>
    </div>
    {/* 
    <div className="subheader">
    <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/appointment'>APPOINTMENT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/login'>LOG IN</Link></li>
          </ul>
        </div>
  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark subheader">
  <div className="container-fluid text-light mx-0">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={showToggler}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse text-center fs-4 navbar-collapse ${show? "show":""}`}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light"><Link to='/'>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light"><Link to="/about">ABOUT</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light"><Link to="/appointment">APPOINTMENT</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light"><Link to="/contact">CONTACT</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light"><Link to="/login">LOG IN</Link></a>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>

  )
}

export default Header;