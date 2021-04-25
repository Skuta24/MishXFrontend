import LogoBlue from './img/LogoBlue.png';
import './Projects.css';
import MaoriFlag from './img/MaoriFlag.png';
import NZFlag from './img/NZFlag.png';
import TeacherProfile from './img/TeacherProfile.jpg';
import BullsEye from './img/BullsEye.png';
import Instr1 from './img/Instr1.png';
import Vidz from './img/Vidz.png';
import Prev from './img/Prev.png';
import Offline from './img/Offline.png';
import VQZ from './img/VQZ.png';
import Check from './img/Check.png';
import ProjectSide1 from'./img/ProjectSide1.png';



function Projects () {
    
    return (
        <div className='ProjectsHeader'>
            <img className='LogoBlue' src={ LogoBlue } alt='LogoBlue'/>
            <h4>PROJECT</h4>
            <p>Introduction</p>
            <div class="circle">1</div>
            <div class="circle1"></div>
            <img className='MaoriFlag' src= { MaoriFlag } alt='MaoriFlag'/>
            <img className='NZFlag' src= { NZFlag } alt='NZFlag'/>
        <div className='ProjectBody'>
        <button onclick=''>More Projects</button>

            <div className='ProjectsSideMenu'>
                <img className='TeacherProfile' src={ TeacherProfile } alt='TeacherProfile'/>
                <img className='BullsEye' src={ BullsEye } alt='BullsEye'/>
                <img className='Instr1' src={ Instr1 } alt='Instr1'/>
                <img className='Vidz' src={ Vidz } alt='Vidz'/>
                <img className='Prev' src={ Prev } alt='Prev'/>
                <img className='Check' src={ Check } alt='Check'/>
                <img className='Offline' src={ Offline } alt='Offline'/>
                <img className='VQZ' src={ VQZ } alt='VQZ'/>
                <img className='ProjectSide1' src={ ProjectSide1 } alt='ProjectSide1'/>
              
                </div>

            </div>
            </div>
         );
    }

export default Projects;