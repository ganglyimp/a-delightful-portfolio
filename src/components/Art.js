import { React, useState } from 'react';
import '../stylesheets/Art.css';

import { XLg } from 'react-bootstrap-icons';

import AfterDark from './AfterDark';

// NOTE: Move image metadata into a JSON file to remove clutter.

/* CHARACTER ART */
import Betelgeuse from '../images/character/BetelgeuseRendition.png';
import DnDThunder from '../images/character/DnDThunder.png';
import Lapidot from '../images/character/Lapidot.png';
import DarkPrince from '../images/character/TheDarkPrinceFamoraxAbaddonFurcifer.png'; 
import VildaliaPose from '../images/character/VildaliaReferencePose.png';
import ABeastRemoved from '../images/character/ABeastRemoved.png';
import BlueyFirstEp from '../images/character/BlueyFirstEpFun.png';
import DnDElf from '../images/character/DNDElfCharacter.png';
import RobbylessBobby from '../images/character/RobbylessBobby.png';
import SerratedFish from '../images/character/SerratedFish.png';
import GoldenTreasure from '../images/character/TheGoldenTreasure.png';
import TipsyHogs from '../images/character/TipsyHogs.png';
import LapidotColor from '../images/character/LapidotColorStudy.png';

/* COMIC ART */
import AutumnSeasoning from '../images/comics/AutumnSeasoning1-3.png';
import LaundryScene from '../images/comics/LaundryScene.png';

/* PAINTINGS */
import SummerMemories from '../images/paintings/DistantSummerMemories.png';
import SunsetRansom from '../images/paintings/RansomsAtSunset.png';
import Gazooks from '../images/paintings/gazooks.png';
import Gwoggles from '../images/paintings/GwogglesBedtimeBoodle.png';


function Art() {
  const characterArt = [{ imgSrc: DnDThunder, imgAlt: 'DnD Thunder' },
                        { imgSrc: DarkPrince, imgAlt: 'The Dark Prince Famorax Addon Furcifer Rendition' },
                        { imgSrc: Betelgeuse, imgAlt: 'Betelgeuse Rendition' },
                        { imgSrc: Lapidot, imgAlt: 'Lapis & Peridot from Steven Universe'},
                        { imgSrc: VildaliaPose, imgAlt: 'Vildalia Reference Pose'},
                        { imgSrc: ABeastRemoved, imgAlt: 'A Beast Removed'},
                        { imgSrc: BlueyFirstEp, imgAlt: 'Bluey First Episode Fun'},
                        { imgSrc: DnDElf, imgAlt: 'DnD Elf Character'},
                        { imgSrc: RobbylessBobby, imgAlt: 'Robbyless Bobby'},
                        { imgSrc: SerratedFish, imgAlt: 'Serrated Fish Icon'},
                        { imgSrc: GoldenTreasure, imgAlt: 'The Golden Treasure'},
                        { imgSrc: TipsyHogs, imgAlt: 'Tipsy Hogs Holiday Party'},
                        { imgSrc: LapidotColor, imgAlt: 'Lapidot Color Study'}
                        ];
  const comicArt = [{ imgSrc: AutumnSeasoning, imgAlt: 'Autumn Seasoning Pages 1 to 3'},
                    { imgSrc: LaundryScene, imgAlt: 'Laundry Scene'}
                    ];
  const paintingArt = [{ imgSrc: SummerMemories, imgAlt: 'Distant Summer Memories'},
                       { imgSrc: SunsetRansom, imgAlt: 'Ocean Cat Panel - Ransoms At Sunset'},
                       { imgSrc: Gazooks, imgAlt: 'Gazooks'},
                       { imgSrc: Gwoggles, imgAlt: 'Gwoggles Bedtime Boodle'}
                      ];

  const [activeTab, setActiveTab] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();
  const [modalImgAlt, setModalImgAlt] = useState('');
  const [isComicModal, setIsComicModal] = useState(false);

  const activateModal = (imgSrc, imgAlt, isComic) => {
    setShowModal(true);
    setModalImg(imgSrc);
    setModalImgAlt(imgAlt);
    setIsComicModal(isComic);
  };

  return (
    <article className='Art' id='Art'>
      <h1>Art |</h1>

      <div className='Art-tabs'>
        <button className={activeTab === 0 ? 'active' : ''} type='button' onClick={() => {setActiveTab(0)}}>Character Art</button>
        <b>•</b>
        <button className={activeTab === 1 ? 'active' : ''} type='button' onClick={() => {setActiveTab(1)}}>Comics</button>
        <b>•</b>
        <button className={activeTab === 2 ? 'active' : ''} type='button' onClick={() => {setActiveTab(2)}}>Paintings</button>
        <b>•</b>
        <button className={activeTab === 3 ? 'active' : ''} type='button' onClick={() => {setActiveTab(3)}}>After Dark</button>
      </div>

      { activeTab === 0 &&
        <section className='Art-character'>
          { characterArt && characterArt.map((item) => {
              return(
                <img src={item.imgSrc} 
                     alt={item.imgAlt} 
                     onClick={() => {activateModal(item.imgSrc, item.imgAlt, false)}} 
                />
              )
            })
          }
        </section>
      }

      { activeTab === 1 &&
        <section className='Art-comic'>
          { comicArt && comicArt.map((item) => {
              return(
                <img src={item.imgSrc} 
                     alt={item.imgAlt} 
                     onClick={() => {activateModal(item.imgSrc, item.imgAlt, true)}} 
                />
              )
            })
          }
        </section>
      }

      { activeTab === 2 &&
        <section className='Art-painting'>
          { paintingArt && paintingArt.map((item) => {
              return(
                <img src={item.imgSrc} 
                     alt={item.imgAlt} 
                     onClick={() => {activateModal(item.imgSrc, item.imgAlt, false)}} 
                />
              )
            })
          }
        </section>
      }

      { /* activeTab === 3 */ }
      <AfterDark activeTab={activeTab} setActiveTab={setActiveTab} activateModal={activateModal} />

      { showModal && 
        <div className='Art-modal' >
          <XLg className='Art-modal-close' onClick={() => setShowModal(false)}/>
          <img className={(isComicModal) ? 'Art-modal-comic' : 'Art-modal-other'} src={modalImg} alt={modalImgAlt} />
        </div>
      }

    </article>
  );
}

export default Art;
