import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBrain } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
	return(
		<div className='ma4 mt0'>
		<Tilt className = "br2 shadow-2" style = {{height:'150px',width:'150px'}}> 
            <FontAwesomeIcon icon={faBrain} size="6x" style={{paddingTop:'20px'}}/>
         </Tilt>
		</div>
     );
}
 export default Logo