import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseCircleFill } from 'react-icons/ri';
import Leftnav from './Leftnav';

function TopBar() {
  let open = false;

  const toggleHiddenNav = () => {
    let nav=document.getElementById('hidden-nav');
    if(open === false){
      nav.style.display="flex";
      setTimeout(() => {
        nav.style.opacity="100%";
      }, 10);
      open = true;
    } else {
        nav.style.opacity="0%";
        setTimeout(() => {
          nav.style.display="none";
        }, 400);
      open = false;
    }
  }
  return (
    <div className='top-bar-parts'>
      <div className='top-bar'>
          <div className='emblem-container'>
              <div />
              <img className="ak-emblem" src="images/AKemblem.png" alt=""/>
              <a href="#top-of-page"><p>ADAM KISSEBERTH</p></a>
          </div>
          <div className='hamburgerMenu-container'>
              <div className='hamburgerMenu'>
                  <RxHamburgerMenu className='hamburgerMenu-icon' onClick={toggleHiddenNav}/>
              </div>
          </div>
          <div className="top-link-container">
              <a href="#top-of-page" className='top-links'><p>HOME</p></a>
              <a href="#about" className='top-links'><p>ABOUT</p></a>
              <a href="#projects" className='top-links'><p>PROJECTS</p></a>
              <a href="#contact" className='top-links'><p>CONTACT</p></a>
          </div>
      </div>
      <div className='hidden-nav' id="hidden-nav">
        <ul>
          <a href="#top-of-page"><li>HOME</li></a>
          <a href="#about"><li>ABOUT</li></a>
          <a href="#projects"><li>PROJECTS</li></a>
          <a href="#contact"><li>CONTACT</li></a>
          <div>
            <RiCloseCircleFill className='close-hidden-nav' onClick={toggleHiddenNav}/>
          </div>
        </ul>
      </div>
      <Leftnav />
    </div>
    
  )
}

export default TopBar