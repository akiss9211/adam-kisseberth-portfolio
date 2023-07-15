import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='left-footer'>
            <h3>Website by Adam Kisseberth</h3>
            <p>Front End Developer</p>
        </div>
        <div className='right-footer'>
            <h3>LINKS</h3>
            <div className='footer-nav' >
                <button className='footer-buttons'><a href="https://www.linkedin.com/in/adam-kisseberth/" target="_blank" rel="noreferrer"><img src='images/linkedInButtonYellow.png' alt=""></img></a></button>
                <button className='footer-buttons'><a href="https://github.com/akiss9211" target="_blank" rel="noreferrer"><img src='images/gitHubButtonYellow.png' alt=""></img></a></button>
                <button className='footer-buttons'><a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage" target="_blank" rel="noreferrer"><img src='images/indeedButtonYellow.png' alt=""></img></a></button>
            </div>
        </div>
    </div>
  )
}

export default Footer