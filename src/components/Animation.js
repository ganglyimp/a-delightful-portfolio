import { React, useState } from 'react';
import { motion } from 'framer-motion';
import '../stylesheets/Animation.scss';

import { ChevronLeft } from 'react-bootstrap-icons';
import { slideVertical } from '../stylesheets/AnimationPresets';

function Animation() {
  const youtubeIDs = ['2fcDqVS-P38', 'B8VZiynoKt4'];
  const youtubeTitles = ['Crushed Out on Soda Beach', 'Weird Little Beast'];
  const [modalOpen, setModalOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  const thumbnailClick = (index) => {
    window.scrollTo(0, 0);
    setModalOpen(true);
    setVideoIndex(index);
  };

  return (
    <motion.article
      className='Animation' 
      initial='initial'
      animate='in'
      exit='out'
      variants={slideVertical}
    >
      <h1>Animation</h1>

      {/* BACK BUTTON - APPEARS WHEN VIDEO MODAL ACTIVE */}
      <button 
        className={`animation-back ${(modalOpen) ? 'back-active' : 'back-inactive'}`} 
        type='button' 
        onClick={() => {setModalOpen(false)}}
      >
        <ChevronLeft onClick={() => {setModalOpen(false)}} />
      </button>

      {/* VIDEO THUMBNAIL CARDS */}
      { !modalOpen &&
        <motion.section className='animation-card-group'>
          { youtubeIDs && youtubeIDs.map((item, index) => {
              return (
                <div
                  key={`aniThumb-${index}`} 
                  className='animation-card' 
                  onClick={() => {thumbnailClick(index)}}
                >
                  <h2>{youtubeTitles[index]}</h2>
                  <img alt={youtubeTitles[index]} src={`https://img.youtube.com/vi/${item}/0.jpg`} loading='lazy'/>
                </div>
              )
            })
          }
        </motion.section>
      }
      
      {/* VIDEO MODAL - YT VIDEO & DESCRIPTION */}
      { modalOpen &&
        <motion.section className='animation-content' id='animationModal'>
          <iframe src={`https://www.youtube.com/embed/${youtubeIDs[videoIndex]}`} 
                  title='YouTube video player' 
                  frameborder='0'
                  allowFullScreen
                  loading='lazy'>
          </iframe>

          <div className='animation-description'>
            <h2>{youtubeTitles[videoIndex]}</h2>
        
            { videoIndex === 0 &&
              <>
                <p>
                  Two ghosts dance in the void showing the abyss isn't the thing that's eternal here :) 
                  This was meant to be made for pride month, but this project took longer than expected,
                  & I got addicted to MySims for a bit.
                </p>
                <p>
                  Thank ya <a href='https://thescaryjokes.bandcamp.com/'>Scary Jokes</a> for making a 
                  wonderful album!  
                </p>
              </>
            }
  
            { videoIndex === 1 &&
              <>
                <p>
                  After a silver lining breaks the sky landing our Little Beast in the fields among
                  the stars, you could say a VIRGIN to the world (get it? get it? its the name of
                  the song :))
                </p>
                <p>
                  <a href='https://soundcloud.com/cowmart'>Link to song artist.</a>
                </p>
              </>
            }
          </div>
        </motion.section>
      }

    </motion.article>
  );
}

export default Animation;
