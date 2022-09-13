import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../stylesheets/Art.scss';

import Lightbox from './Lightbox';
import { slideVertical, artLoadIn } from '../stylesheets/AnimationPresets';

function Art() {
  
  const [characterArt, setCharArt] = useState([]);
  const [comicArt, setComicArt] = useState([]);
  const [paintingArt, setPaintingArt] = useState([]);                    

  const [activeTab, setActiveTab] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();
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
        <button className={activeTab === 0 ? 'active' : ''} type='button' onClick={() => {setActiveTab(0)}}>Character Art</button>
        <b>•</b>
        <button className={activeTab === 1 ? 'active' : ''} type='button' onClick={() => {setActiveTab(1)}}>Comics</button>
        <b>•</b>
        <button className={activeTab === 2 ? 'active' : ''} type='button' onClick={() => {setActiveTab(2)}}>Paintings</button>
      </div>

      { activeTab === 0 &&
        <section className='Art-character'>
          { characterArt && characterArt.map((item) => {
              return(
                <motion.img 
                  src={process.env.PUBLIC_URL + item.imgSrc} 
                  alt={item.imgAlt} 
                  onClick={() => {activateModal(item.imgSrc, item.imgAlt, item.imgCaption, false)}} 
                  
                  variants={artLoadIn}
                  initial='initial'
                  animate='in'
                  exit='out'
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
                <div className='Art-comic-container'>
                  <motion.img 
                    src={process.env.PUBLIC_URL + item.imgSrc} 
                    alt={item.imgAlt} 
                    onClick={() => {activateModal(item.imgSrc, item.imgAlt, item.imgCaption, true)}}

                    variants={artLoadIn}
                    initial='initial'
                    animate='in'
                    exit='out'
                  />
                  <b>{item.imgAlt}</b>
                </div>
              )
            })
          }
        </section>
      }

      { activeTab === 2 &&
        <section className='Art-painting'>
          { paintingArt && paintingArt.map((item) => {
              return(
                <motion.img 
                  src={process.env.PUBLIC_URL + item.imgSrc} 
                  alt={item.imgAlt} 
                  onClick={() => {activateModal(item.imgSrc, item.imgAlt, item.imgCaption, false)}} 

                  variants={artLoadIn}
                  initial='initial'
                  animate='in'
                  exit='out'
                />
              )
            })
          }
        </section>
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
