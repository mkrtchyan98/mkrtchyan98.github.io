 import React from 'react'
 import {Link} from 'react-router-dom';
import Footer from '../components/Footer'

 const Header = () => {
  return (
    <>
  <header id="header">
     <div className="content">
<div className="inner">
  <h1>  Welcome To My official Website</h1>
  <Link to="/skills" className="btn btn-primary"  role="button">See more</Link>
</div>
     </div>
     <nav>
<ul>
  <li><Link to="/skills" className="btn btn-primary" role="button" >Skills</Link></li>
  <li><Link to="/about" className="btn btn-primary" role="button" >Projects</Link></li>
  <li><Link to="/contact"  className="btn btn-primary" role="button" >Contact</Link></li>
</ul>
     </nav>
   </header>
      <Footer />
      </>

   )
}

   export default Header;