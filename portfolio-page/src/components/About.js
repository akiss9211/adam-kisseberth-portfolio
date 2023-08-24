import React from 'react'
import Fade from 'react-reveal/Fade';
import SkillItems from './SkillItems';


function About() {
  return (
    <div className='about-me-container' id="about">
        <Fade cascade>
        <div className='about-title-text'>
            <h1>ABOUT ME</h1>
            <div className='about-line-break'/>
            <p>Learn more about me in this section</p>
        </div>
        <div className='about-content'>
            <div className='about-left-content'>
                <div />
                <div className='left-content-middle'>
                    <h2>Get to know me:</h2>
                    <div className='about-me-text'>
                        <p>I'm a <b>Front-End Web Developer</b> who loves what he does! Starting as a hobby, I quickly found passion for programming. In school, I've learned <b>HTML</b>, <b>CSS</b>, <b>JAVA</b>, <b>XML</b>, and more. I am really motivated to keep learning new technologies and have already cultivated skills outside of school such as <b>JavaScript</b> and <b>React</b> knowing that these are very useful tools for Front-End.</p>
                        <p>I also LOVE videogames. I'm a retired multi-game professional gamer where I competed alongside and against the best gamers North America has to offer In <b>CSGO</b> and <b>Valorant</b>. Since finding my passion of development, I game less but it is still one of my favorite hobbies. I have learned the tremendous value and effect of <b>team work</b>, <b>communication</b>, and <b>leadership</b> from my experience competing over the past 10 years. I also learned about representing professional brands as I represented some of the largest Esports brands in North America such as <b>Envy Gaming</b>, <b>Elevate</b>, and <b>Splyce</b>.</p>
                    </div>
                </div>
                <div />
            </div>
            <div className='about-right-content'>
                <div>
                    <h2>Technical Skills:</h2>
                    <SkillItems />
                </div>
                <div />
            </div>
        </div>
        </Fade>
    </div>
  )
}

export default About