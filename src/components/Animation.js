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

      { !modalOpen &&
        <motion.section className='animation-card-group'>
          { youtubeIDs && youtubeIDs.map((item, index) => {
              return (
                <div className='animation-card' onClick={() => {thumbnailClick(index)}}>
                  <h2>{youtubeTitles[index]}</h2>
                  <img alt={youtubeTitles[index]} src={`https://img.youtube.com/vi/${item}/0.jpg`} />
                </div>
              )
            })
          }
        </motion.section>
      }
      
      { modalOpen &&
        <motion.section className='animation-content'>
          <ChevronLeft onClick={() => {setModalOpen(false)}} />

          <iframe src={`https://www.youtube.com/embed/${youtubeIDs[videoIndex]}`} 
                    title='YouTube video player' 
                    frameborder='0' 
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' 
                    allowfullscreen>
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
