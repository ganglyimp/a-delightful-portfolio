import { React } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../stylesheets/ArtSection.scss';

import { artLoadIn, sectionSlide } from '../stylesheets/AnimationPresets';

function ArtSection(props) {
  const isComic = (props.artType === 'comic') ? true : false;

  return (
    <motion.section 
      className={`Art-${props.artType}`}
      custom={props.direction}
      initial='initial'
      animate='in'
      out='out'
      transition={{duration: 0.5}}
      variants={sectionSlide}
    >
      { props.artData && props.artData.map((item) => {
          if (props.artType === 'comic') {
            return(
              <div className='Art-comic-container'>
                <motion.img 
                  src={process.env.PUBLIC_URL + item.imgSrc} 
                  alt={item.imgAlt} 
                  onClick={() => {props.activateModal(item.imgSrc, item.imgAlt, item.imgCaption, isComic)}}

                  variants={artLoadIn}
                  initial='initial'
                  animate='in'
                  exit='out'
                />
                <b>{item.imgAlt}</b>
              </div>
            )
          }
          else {
            return(
              <motion.img 
                src={process.env.PUBLIC_URL + item.imgSrc} 
                alt={item.imgAlt} 
                onClick={() => {props.activateModal(item.imgSrc, item.imgAlt, item.imgCaption, isComic)}} 
                
                variants={artLoadIn}
                initial='initial'
                animate='in'
                exit='out'
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
  artData: PropTypes.object,
  activateModal: PropTypes.func
};

export default ArtSection;
