import { React } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../stylesheets/ArtSection.scss';

import { sectionSlide } from '../stylesheets/AnimationPresets';

function ArtSection(props) {
  const isComic = (props.artType === 'comic') ? true : false;

  return (
    <motion.section
      className={`Art-${props.artType}`}
      custom={props.direction}
      variants={sectionSlide}
      initial='initial'
      animate='in'
      exit='out'
      transition={{x: {type: 'spring', stiffness: 300, damping: 30, duration: 0.2}, opacity: {duration: 0.2}}}
    >
      { props.artData && props.artData.map((item, index) => {
          if (props.artType === 'comic') { // Comics are contained in a wrapper div to crop off length
            return(
              <div className='Art-comic-container' key={`artItem-${index}`}>
                <img 
                  src={process.env.PUBLIC_URL + item.imgSrc} 
                  alt={item.imgAlt} 
                  onClick={() => {props.activateModal(item.imgSrc, item.imgAlt, item.imgCaption, isComic)}}
                />
                <b>{item.imgAlt}</b>
              </div>
            )
          }
          else {
            return(
              <img 
                key={`artItem-${index}`}
                src={process.env.PUBLIC_URL + item.imgSrc} 
                alt={item.imgAlt} 
                onClick={() => {props.activateModal(item.imgSrc, item.imgAlt, item.imgCaption, isComic)}} 
              />
            )
          }
        })
      }
    </motion.section>
  );
}

ArtSection.propTypes = {
  artType: PropTypes.string,
  direction: PropTypes.number,
  artData: PropTypes.array,
  activateModal: PropTypes.func
};

export default ArtSection;
