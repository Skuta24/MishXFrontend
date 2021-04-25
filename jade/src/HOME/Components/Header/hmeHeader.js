import LogoWhite1  from './img/LogoWhite1.png';
import NZFlag from './img/NZFlag.jpg';
import MaoriFlag from './img/MaoriFlag.png';
import LoginPic from './img/LoginPic.png';
import './hmeHeader.css';



function TopNavBar () {
    return (
        <div className="TopNavBar">
            <img className="Logo"src= { LogoWhite1 } alt='LogoWhite1'/>
            <button>HOME</button>
               <button>FEATURES</button>
              <button >TEACHERS</button>
              <p className='Lang'>LANG</p>
                 <img className="NZFlag" src= { NZFlag } alt="NZ Flag"/>
                 <img className="MaoriFlag" src= { MaoriFlag } alt="Maori Flag"/>
                 <img className="LoginPic" src= { LoginPic } alt="LoginPic"/>
        </div>
        
    );
}

export default TopNavBar;