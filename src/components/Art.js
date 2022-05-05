import { React, useState } from 'react';
import '../stylesheets/Art.css';

import { XLg } from 'react-bootstrap-icons';

/* CHARACTER ART */
import Betelgeuse from '../images/character/BetelgeuseRendition.png';
import DnDThunder from '../images/character/DnDThunder.png';
import Lapidot from '../images/character/Lapidot.png';
import DarkPrince from '../images/character/TheDarkPrinceFamoraxAbaddonFurcifer.png'; 
import VildaliaPose from '../images/character/VildaliaReferencePose.png';

/* COMIC ART */
import AutumnSeasoning from '../images/comics/AutumnSeasoning1-3.png';

/* PAINTINGS */
import SummerMemories from '../images/paintings/DistantSummerMemories.png';
import SunsetRansom from '../images/paintings/RansomsAtSunset.png';

function Art() {
  const [activeTab, setActiveTab] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();
  const [modalImgAlt, setModalImgAlt] = useState('');

  const activateModal = (imgSrc, imgAlt) => {
    setShowModal(true);
    setModalImg(imgSrc);
    setModalImgAlt(imgAlt);
  };

  return (
    <article className='Art' id='Art'>
      <h1>Art |</h1>

      <div className='Art-tabs'>
        <button type='button' onClick={() => {setActiveTab(0)}}>Character Art</button>
        <b>•</b>
        <button type='button' onClick={() => {setActiveTab(1)}}>Comics</button>
        <b>•</b>
        <button type='button' onClick={() => {setActiveTab(2)}}>Paintings</button>
      </div>

      { activeTab === 0 &&
        <section className='Art-character'>
          <img src={DnDThunder} 
               alt='DnD Thunder'  
               onClick={() => {activateModal(DnDThunder, 'Dnd Thunder')}}
          />

          <img src={DarkPrince} 
               alt='The Dark Prince Famorax Addon Furcifer Rendition' 
               onClick={() => {activateModal(DarkPrince, 'The Dark Prince Famorax Addon Furcifer Rendition')}}
          />

          <img src={Betelgeuse} 
               alt='Betelgeuse Rendition' 
               onClick={() => {activateModal(Betelgeuse, 'Betelgeuse Rendition')}}
          />

          <img src={Lapidot} 
               alt='Lapis & Peridot from Steven Universe' 
               onClick={() => {activateModal(Lapidot, 'Lapis & Peridot from Steven Universe')}}
          />
          <img src={VildaliaPose} 
               alt='Vildalia Reference Pose' 
               onClick={() => {activateModal(VildaliaPose, 'Vildalia Reference Pose')}}
          />
        </section>
      }

      { activeTab === 1 &&
        <section className='Art-comic'>
          <img src={AutumnSeasoning} 
               alt='Autumn Seasoning Pages 1 to 3' 
               onClick={() => {activateModal(AutumnSeasoning, 'Autumn Seasoning Pages 1 to 3')}}
          />
        </section>
      }

      { activeTab === 2 &&
        <section className='Art-painting'>
          <img src={SummerMemories} 
               alt='Distant Summer Memories' 
               onClick={() => {activateModal(SummerMemories, 'Distant Summer Memories')}}
          />

          <img src={SunsetRansom} 
               alt='Ransoms At Sunset' 
               onClick={() => {activateModal(SunsetRansom, 'Ransoms At Sunset')}}
          />
        </section>
      }

      { showModal && 
        <div className='Art-modal' >
          <XLg className='Art-modal-close' onClick={() => setShowModal(false)}/>
          <img src={modalImg} alt={modalImgAlt} />
        </div>
      }

    </article>
  );
}

export default Art;
