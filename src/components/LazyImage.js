import { React, useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../stylesheets/LazyImage.scss';

function LazyImage(props) {
  const [imgLoading, setImgLoading] = useState(true);
  const [pulse, setPulse] = useState(true);

  const imgLoaded = () => {
    setImgLoading(false);
    setTimeout(() => {setPulse(false)}, 500);
  }

  return (
    <motion.div 
      className={`${pulse ? 'pulse' : ''} LazyImage`}
      onClick={() => {props.clickEvent()}}
    >
      <motion.img
        initial={{height: '20vw', opacity: 0}}
        animate={{height: (imgLoading ? '20vw' : 'auto'), 
                  opacity: (imgLoading ? 0 : 1)
                }}
        transition={({height: {delay: 0, duration: 0.3}},
                     {opacity: {delay: 0.5, duration: 0.4}} 
                    )}
        onLoad={imgLoaded}
        
        src={props.src}
        alt={props.alt}
        loading='lazy'
      />
    </motion.div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  clickEvent: PropTypes.any,
};

export default LazyImage;
