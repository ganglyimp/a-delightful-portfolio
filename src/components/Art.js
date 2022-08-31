import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../stylesheets/Art.css';

import Lightbox from './Lightbox';
import { slideVertical } from '../stylesheets/AnimationPresets';

function Art() {
  
  const [characterArt, setCharArt] = useState([]);
  const [comicArt, setComicArt] = useState([]);
  const [paintingArt, setPaintingArt] = useState([]);                    

  const [activeTab, setActiveTab] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();
  const [modalImgAlt, setModalImgAlt] = useState('');
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

  const activateModal = (imgSrc, imgAlt, isComic) => {
    setShowModal(true);
    setModalImg(imgSrc);
    setModalImgAlt(imgAlt);
    setIsComicModal(isComic);
  };

  return (
    <motion.article 
      className='Art' 
      initial="initial"
      animate="in"
      exit="out"
      variants={slideVertical}
    >
      <h1>Art |</h1>

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
                <img src={process.env.PUBLIC_URL + item.imgSrc} 
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
                <img src={process.env.PUBLIC_URL + item.imgSrc} 
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
                <img src={process.env.PUBLIC_URL + item.imgSrc} 
                     alt={item.imgAlt} 
                     onClick={() => {activateModal(item.imgSrc, item.imgAlt, false)}} 
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
          isComic={isComicModal}
        />
      }

    </motion.article>
  );
}

export default Art;
