import TopNavBar from './HOME/Components/Header/';
import Baby from './HOME/Home/Components/Baby';
import Tele1 from './HOME/Home/Components/Tele1';
import HmeBody from './HOME/Home/Components/HmeBody';
import HmeFooter from './HOME/Components/Footer/HmeFooter';
import Modal1 from './HOME/Components/Modal1'


function HOME  () {
  return (
    <div className="Home">
      {/*Created by Jade. Took me a while to undestand how to get it to this point. */}
        <TopNavBar />
        <Modal1 />
        <Baby />
        <Tele1 />
        <HmeBody />
        <HmeFooter />
        {/*All pages called above are for the homepage*/}     
    </div>
    );
  }

  export default HOME;

