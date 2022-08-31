import { React, useState, useEffect } from 'react';
import '../stylesheets/AfterDark.css';

import Lightbox from './Lightbox';

function AfterDark() {
  const [imgData, setImgData] = useState([]);

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
        setImgData(jsonFile.afterDark)
    })
  };

  const activateModal = (imgSrc, imgAlt, isComic) => {
    setShowModal(true);
    setModalImg(imgSrc);
    setModalImgAlt(imgAlt);
    setIsComicModal(isComic);
  };

  return (
    <article className='AfterDark'>
      <header className='AfterDark-header'>
        <h1>AFTER DARK</h1>
      </header>

      <div className='AfterDark-images'>
        { imgData && imgData.map((item) => {
            return(
              <img src={process.env.PUBLIC_URL + item.imgSrc} 
                   alt={item.imgAlt} 
                   onClick={() => {activateModal(item.imgSrc, item.imgAlt, false)}}
              />
            )
          })
        }
      </div>

      { showModal && 
        <Lightbox 
          setShowModal={setShowModal} 
          modalImg={modalImg} 
          modalAlt={modalImgAlt} 
          isComic={isComicModal}
        />
      }
    </article>
  );
}

export default AfterDark;
