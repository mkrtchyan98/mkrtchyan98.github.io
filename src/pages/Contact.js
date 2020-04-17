 import React from 'react'
import { useHistory } from 'react-router-dom';

 const Contact = () => {
 	   const history = useHistory()

  return (
    <>
    	<article id="contact">
								<h2 className="major">Contact</h2>
								<form action="mailto:tigranmkrtchyan23@gmail.com" method="post">
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="4"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send Message" class="primary" /></li>
									</ul>
								</form>
								<ul class="icons">													
									<li><a href="https://linkedin.com/in/tigran-mkrtchyan23" class="icon brands fa-linkedin"><span class="label">Instagram</span></a></li>
									<li><a href="https://github.com/mkrtchyan98" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
								</ul>
								        <div className="close" onClick={() => history.goBack()}></div>

							</article>
    </>
  )
}

   export default Contact;