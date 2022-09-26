import { React, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../stylesheets/AfterDark.scss';
import '../stylesheets/Fireflies.scss';

import LazyImage from './LazyImage';
import Lightbox from './Lightbox';
import { slideVertical } from '../stylesheets/AnimationPresets';

function AfterDark() {
  const fireflyNum = 20; //# of animated fireflies
  const [imgData, setImgData] = useState([]);

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
        setImgData(jsonFile.afterDark)
    })
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
      className='AfterDark'
      initial='initial'
      animate='in'
      exit='out'
      variants={slideVertical}
    >
      <header className='AfterDark-header'>
        <h1>AFTER DARK</h1>

        <div className='firefly-group'>
          { [...Array(fireflyNum)].map((e, i) => <div className='firefly' key={i}></div>) }
        </div>
      </header>

      <div className='AfterDark-images'>
        { imgData && imgData.map((item, index) => {
            return(
              <LazyImage
                key={`ad-${index}`} 
                src={process.env.PUBLIC_URL + item.imgSrc} 
                alt={item.imgAlt} 
                clickEvent={() => {activateModal(item.imgSrc, item.imgAlt, item.imgCaption, false)}}
              />
            )
          })
        }
      </div>
      
      <AnimatePresence>
        { showModal && 
          <Lightbox 
            setShowModal={setShowModal} 
            modalImg={modalImg} 
            modalAlt={modalImgAlt}
            modalCap={modalImgCap}
            isComic={isComicModal}
          />
        }
      </AnimatePresence>
    </motion.article>
  );
}

export default AfterDark;
