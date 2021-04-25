import React from 'react';
import './ProjectBuilder1.css';
import LogoBlue from './img/LogoBlue.png';
import BullsEye from './img/BullsEye.png';
import Instr1 from './img/Instr1.png';
import Vidz from './img/Vidz.png';
import Prev from './img/Prev.png';
import Check from './img/Check.png';
import Offline from './img/Offline.png';
import VqR from './img/VqR.png';
import teacherProfile from './img/teacherProfile.jpg';


function ProjectBuilder1() {
    return (
        <div className='ProjectHeader'>
            <img className='LogoBlue' src= { LogoBlue } alt='LogoBlue'/>
            <h4 className='ProjectH4'>PROJECT</h4>
            <p>Introduction</p>
            <div class="circle">1</div>
            <div class="circle1"></div>
            <div className='ProjectMain'>
                {/* SideMenu starts from here  */}
            <div className="SideMenu">
                <div><img className='teacherProfile' src= { teacherProfile } alt='teacherProfile'/>
                <img className='BullsEye' src= { BullsEye } alt='BullsEye'/>
                <img className='Instr1' src= { Instr1 } alt='Instr1'/>
                <img className='Vidz' src= { Vidz } alt='Vidz'/>
                <img className='Prev' src= { Prev } alt='Prev'/>
                <img className='Check' src= { Check } alt='Check'/>
                <img className='Offline' src= { Offline } alt='Offline'/>
                <img className='VqR' src= { VqR } alt='VqR'/>
                </div>
                <h1>Beginner Course</h1>
            </div>
        </div>
    </div>
     
    );
}

export default ProjectBuilder1;