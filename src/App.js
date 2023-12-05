import React from 'react';
import img from './Image/img.jpg';
import './App.css';
const App =()=>{
  return(
    <>
    <h1>Sri Krishna College Of Engineering and Technology</h1>
    <h2>Karthika G</h2>
    <div>
    <h2>CSE CYBER SECURITY</h2>
<img src={img} alt='error'></img>
    <p> For more information<a href="https://skcet.ac.in/" target="blank"> www.skcet.com</a></p>
   
    <dl>
        <dt>CYS</dt>
        <dd><h2>Cyber security is the practice of defending computers and servers, mobile devices, electronic systems, networks and data from malicious attack.
            Cyber-security has become more critical than ever as cyber-attacks continue to evolve at a rapid pace.</h2></dd>
    </dl>
    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/JVK5rQ_gX6w?si=ncIH4rBCBdZIU4b9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <h1>One Way Parent To Child</h1>
    </div>
     </>
  )
}
export default App