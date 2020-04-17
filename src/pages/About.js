 import React from 'react'
import { useHistory } from 'react-router-dom';

const About = () => {
	   const history = useHistory()

  return (
 	<>
 	    	<div id="main">
	<article id="projects">
<div className="responsive">
  <div className="gallery">
    	<img src="/images/reactquiz.jpg" alt="Quiz" />
    <div className="desc">
  <h3>quiz app </h3>
       <h6>React,Redux,OpenTB API</h6>

	<a className="btn btn-primary" href="https://reactquizz.netlify.com/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
		<a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-quiz" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>

    </div>
  </div>
</div>
<div className="responsive">
  <div className="gallery">
    	<img src="/images/shopping.png" alt="shopping" />
        <div className="desc">
     <h3>react-shop</h3>
     <h6> React,Redux,material-ui,bootstrap</h6>
<a className="btn btn-primary" href="https://shoppcart.netlify.com" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/React-Shopping-Cart" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>								


								<div className="responsive">
  <div className="gallery">
    	<img src="/images/netflixclone.jpg" alt="Netflix" />
    <div className="desc">
  <h3>netflix website clone </h3>
       <h6>React,material-ui,styled-components,MovieDB API</h6>

	<a className="btn btn-primary" href="https://netflixam.netlify.com/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
		<a className="btn btn-primary" href="https://github.com/mkrtchyan98/netflixclone" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>

    </div>
  </div>
</div>
<div className="responsive">
  <div className="gallery">
    	<img src="/images/chatonee.png" alt="Chatonee" />
        <div className="desc">
     <h3>chatonee(chat app)</h3>
     <h6> React,Firebase,material-ui</h6>
<a className="btn btn-primary" href="https://chatonnez.firebaseapp.com/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/Chat-app" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>	
							
<div className="responsive">
  <div className="gallery">
   <img src="/images/warehouse.png" alt="Warehouse app" />
    <div className="desc">
     <h3>product app</h3>
     <h6> react and redux</h6>
<a className="btn btn-primary" href="https://warehousep.netlify.com/" role="button" target="_blank"  rel="noopener noreferrer" >See Website</a>
	<a className="btn btn-primary" href="https://github.com/mkrtchyan98/WareHouseapp" role="button" target="_blank"  rel="noopener noreferrer" >See Code</a>



    </div>
  </div>
</div>							



        <div className="close" onClick={() => history.goBack()}></div>

							</article>
							</div>

 	</>
   )
}

   export default About;