import React from 'react'
import {Link} from 'react-router-dom'
import './landing.css'
const LandingPage=()=>{
    return(
        <div className='logPage-container '>
            <div className='logImg-container log'>
                <img src={require('../../Images/log.jpg')} alt='log img'/>
            </div>
            <div className='logButton-container log'>
                <h1>10X Team 04</h1>
                <Link to='/post'><button className='log-btn'>Enter</button></Link> 
            </div>
            
        </div>
        
    )
}
export default LandingPage