import { React } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../stylesheets/ArtSection.scss';

import LazyImage from './LazyImage';
import { slideUp } from '../stylesheets/AnimationPresets';

function ArtSection(props) {
  const isComic = (props.artType === 'comic') ? true : false;

  return (
    <motion.section
      className={`Art-${props.artType}`}
      variants={slideUp}
      initial='initial'
      animate='in'
      exit='out'
    >
      { props.artData && props.artData.map((item, index) => {
          if (props.artType === 'comic') { // Comics are contained in a wrapper div to crop off length
            return(
              <div className='Art-comic-container' key={`artItem-${index}`}>
                <LazyImage
                  src={process.env.PUBLIC_URL + item.imgSrc}
                  alt={item.imgAlt}
                  clickEvent={() => {props.activateModal(item.imgSrc, item.imgAlt, item.imgCaption, isComic)}}
                />
                <b>{item.imgAlt}</b>
              </div>
            )
          }
          else {
            return(
              <LazyImage
                key={`artItem-${index}`}
                src={process.env.PUBLIC_URL + item.imgSrc} 
                alt={item.imgAlt} 
                clickEvent={() => {props.activateModal(item.imgSrc, item.imgAlt, item.imgCaption, isComic)}} 
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
