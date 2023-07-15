import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io';

function Header() {
    let open = false;
    let arrowElement = <IoIosArrowDroprightCircle className='arrow-icon-button' id="arrow-element"/>;

const toggleLeftNav = () => {
    let element = document.getElementById('left-nav-menu-container')
    let button = document.getElementById('left-nav-expand-button')
    let arrow = document.getElementById('arrow-element')

    if(open === false) {
        element.style.transform="translateX(0px)";
        button.style.transform="translateX(0px)";
        arrow.style.transform="scaleX(-1)";
        open=true;
    } else {
        element.style.transform="translateX(-40px)";
        button.style.transform="translateX(-40px)";
        arrow.style.transform="scaleX(1)";
        open=false;
    }
}

    return (
        <div className='header-container' id="top-of-page">
            <div className='header-image'>
                <div className='header-image-items'>
                    <div className='left-nav-flex'>
                        <div className='left-nav-hide' id="left-nav-menu-container">
                            <div className='left-side-nav' >
                                <button className='buttons'><a href="https://www.linkedin.com/in/adam-kisseberth/" target="_blank" rel="noreferrer"><img src='images/linkedInButton.png' alt=""></img></a></button>
                                <button className='buttons'><a href="https://github.com/akiss9211" target="_blank" rel="noreferrer"><img src='images/gitHubButton.png' alt=""></img></a></button>
                                <button className='buttons'><a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage" target="_blank" rel="noreferrer"><img src='images/indeedButton.png' alt=""></img></a></button>
                            </div>
                        </div>
                        <div className='left-nav-expand-button' id="left-nav-expand-button" onClick={toggleLeftNav}>
                            {arrowElement}
                        </div>
                    </div>
                    <div className='header-image-text'>
                        <p className='name-title' >I'M ADAM KISSEBERTH</p>
                        <p className='open-statement'>A Frontend Web Developer building websites and web applications that satisfy consumer needs.</p>
                        <div className='project-button'>
                            <a href='#projects'><button>PROJECTS</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header