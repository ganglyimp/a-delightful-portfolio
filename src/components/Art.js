import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../stylesheets/Art.scss';

import Lightbox from './Lightbox';
import ArtSection from './ArtSection';
import { slideVertical } from '../stylesheets/AnimationPresets';

function Art() {
  
  const [characterArt, setCharArt] = useState([]);
  const [comicArt, setComicArt] = useState([]);
  const [paintingArt, setPaintingArt] = useState([]);                    

  const [activeTab, setActiveTab] = useState(0);
  const [tabDirection, setTabDirection] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalImgAlt, setModalImgAlt] = useState('');
  const [modalImgCap, setModalImgCap] = useState('');
  const [isComicModal, setIsComicModal] = useState(false);

  useEffect(() => {
    getArtData();
  }, []);

  const getArtData = () => {
    fetch('artData.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }
    ).then(res => {
      return res.json();
    }).then((jsonFile) => {
        setCharArt(jsonFile.character);
        setComicArt(jsonFile.comic);
        setPaintingArt(jsonFile.painting);
    })
  }

  const switchTab = (newTab) => {
    let tabDirection = activeTab - newTab;

    if (tabDirection > 0)
      setTabDirection(1);
    else
      setTabDirection(-1);
    
    setActiveTab(newTab);
  };

  const activateModal = (imgSrc, imgAlt, imgCap, isComic) => {
    setShowModal(true);
    setModalImg(imgSrc);
    setModalImgAlt(imgAlt);
    setModalImgCap(imgCap);
    setIsComicModal(isComic);
  };

  return (
    <motion.article 
      className='Art' 
      initial='initial'
      animate='in'
      exit='out'
      variants={slideVertical}
    >
      <h1>Art</h1>

      <div className='Art-tabs'>
        <button 
          className={activeTab === 0 ? 'active' : ''} 
          type='button' 
          onClick={() => {switchTab(0)}}
        >
          Character Art
        </button>

        <b>•</b>

        <button 
          className={activeTab === 1 ? 'active' : ''} 
          type='button' 
          onClick={() => {switchTab(1)}}
        >
          Comics
        </button>

        <b>•</b>

        <button 
          className={activeTab === 2 ? 'active' : ''} 
          type='button' 
          onClick={() => {switchTab(2)}}
        >
          Paintings
        </button>
      </div>

      { activeTab === 0 &&
        <ArtSection
          artType='character'
          direction={tabDirection}
          artData={characterArt}
          activateModal={activateModal}
        />
      }

      { activeTab === 1 &&
        <ArtSection
          artType='comic'
          direction={tabDirection}
          artData={comicArt}
          activateModal={activateModal}
        />
      }

      { activeTab === 2 &&
        <ArtSection 
          artType='painting'
          direction={tabDirection}
          artData={paintingArt}
          activateModal={activateModal}
        />
      }

      { showModal && 
        <Lightbox 
          setShowModal={setShowModal} 
          modalImg={modalImg} 
          modalAlt={modalImgAlt}
          modalCap={modalImgCap} 
          isComic={isComicModal}
        />
      }

    </motion.article>
  );
}

export default Art;
