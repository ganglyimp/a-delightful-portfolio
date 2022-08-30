import '../stylesheets/AfterDark.css';

import CatWickCutie from '../images/weird/CatWickCutieCup.png';
import CatWickLord from '../images/weird/CatwickOurLord.png';
import Claustrophobic from '../images/weird/ClaustrophobicRedraw.png';
import Clavier from '../images/weird/Clavier.png';
import CryingShow from '../images/weird/CryForTheShow.png';
import GamingGranny from '../images/weird/GamingGrannyInTheTub.png';
import ScaryDaisy from '../images/weird/Scary.png';
import CryptidsCover from '../images/weird/SpookyCryptidsCreaturesPaintedCover.png';
import HorrorClown from '../images/weird/HorrorClown.png';
import Lemon from '../images/weird/Lemon.png';
import Room from '../images/weird/Room.png';

function AfterDark(props) {
  const imgInfo = [{
                    imgSrc: CatWickCutie,
                    imgAlt: 'Cat Wick & Cutie Cup'
                   },
                   {
                     imgSrc: CatWickLord,
                     imgAlt: 'Cat Wick, Our Lord and Savior'
                   },
                   {
                     imgSrc: Claustrophobic,
                     imgAlt: 'Claustrophobic Redraw'
                   },
                   {
                     imgSrc: Clavier,
                     imgAlt: 'The Endless Clavier'
                   },
                   {
                     imgSrc: CryingShow,
                     imgAlt: 'Crying for the Show'
                   },
                   {
                     imgSrc: GamingGranny,
                     imgAlt: 'Gaming Granny in the Tub'
                   },
                   {
                     imgSrc: ScaryDaisy,
                     imgAlt: 'Scary'
                   },
                   {
                     imgSrc: CryptidsCover,
                     imgAlt: 'Cryptids & Creatures Cover'
                   },
                   {
                    imgSrc: HorrorClown,
                    imgAlt: 'Horror Clown'
                   },
                   {
                    imgSrc: Lemon,
                    imgAlt: 'Lemon'
                   },
                   {
                    imgSrc: Room,
                    imgAlt: 'Room'
                   }
                  ];

  return (
    <div className='AfterDark'>

      <div className='AfterDark-header'>
        <h1>AFTER DARK</h1>
      </div>

      <div className='AfterDark-images'>
          { imgInfo && imgInfo.map((item) => {
              return(
                <img src={item.imgSrc} 
                     alt={item.imgAlt} 
                     onClick={() => {props.activateModal(item.imgSrc, item.imgAlt, false)}}
                />
              )
            })
          }
        </div>
    </div>
  );
}

export default AfterDark;
