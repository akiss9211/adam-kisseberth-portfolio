import React from 'react'
import Fade from 'react-reveal/Fade';

function Header() {

    return (
        <div className='header-container' id="top-of-page">
            <Fade cascade>
            <div className='header-image'>
                <div className='header-image-items'>
                    <div className='header-image-text'>
                        <p className='name-title' >I'M ADAM KISSEBERTH</p>
                        <p className='open-statement'>A Frontend Web Developer building websites and web applications that satisfy consumer needs.</p>
                        <div className='project-button'>
                            <a href='#projects'><button>PROJECTS</button></a>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
        
    )
}

export default Header