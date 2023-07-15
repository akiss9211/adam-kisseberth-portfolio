import React from 'react';
import Fade from 'react-reveal/Fade';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io';
import { SiCss3 } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { FaReact, FaJava, FaGitAlt, FaGithub } from 'react-icons/fa';

function SkillItems () {
    return (
      <div>
        <Fade right cascade>
            <div className='tech-skills-grid'>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><ImHtmlFive/></div>
                    <div>HTML</div>
                </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><SiCss3/></div>
                    <div>CSS</div>
                </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><IoLogoJavascript /></div>
                    <div>JavaScript</div>
                </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><FaReact /></div>
                    <div>React</div>
                </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><FaJava /></div>
                    <div>Java</div>
                    </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><FaGitAlt /></div>
                    <div>GIT</div>
                    </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><FaGithub /></div>
                    <div>GitHub</div>
                </div>
                <div className='tech-skill-item'>
                    <div className='tech-icon'><GrMysql /></div>
                    <div>MySQL</div>
                </div>
            </div>
        </Fade>
      </div>
    );
}

export default SkillItems;