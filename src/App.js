import React,{Suspense,lazy} from 'react';
import {Route} from 'react-router-dom';
import Switch from 'react-router-transition-switch'
import Fader from 'react-fader'
 const Header = lazy(() => import('./pages/Header'));
 const Skills = lazy(() => import('./pages/Skills'));
 const About = lazy(() => import('./pages/About'));
 const Contact = lazy(() => import('./pages/Contact'));
function App() {
  return ( <>
          <div id="wrapper">
          <Suspense fallback={<div>Загрузка...</div>}>
       <Switch 
       component={Fader}>
      <Route exact path="/" component={Header} />
      <Route path="/skills" component={Skills} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
          </Switch>
          </Suspense>
</div>
</>
 )
}
export default App;
