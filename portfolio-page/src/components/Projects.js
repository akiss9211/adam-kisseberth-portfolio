import React from 'react'
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <div className='project-container' id="projects">
      <Fade cascade>
        <div className='about-title-text'>
            <h1>PROJECTS</h1>
            <div className='about-line-break'/>
            <p>A few samples of apps I've developed</p>
            <p>(Coming Soon)</p>
        </div>
        <div className='proj-item-container'>
            <div className='proj-list-container'>
                <div className='proj-items'>
                  <div></div>
                  <div></div>
                </div>
                <div className='proj-items'>
                  <div></div>
                  <div></div>
                </div>
                <div className='proj-items'>
                  <div></div>
                  <div></div>
                </div>
                <div className='proj-items'>
                  <div></div>
                  <div></div>
                </div>
            </div>
        </div>
        </Fade>
    </div>
  )
}

export default Projects;