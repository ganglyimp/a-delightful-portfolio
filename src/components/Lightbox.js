import { React} from 'react';
import '../stylesheets/Lightbox.scss';

import { XLg } from 'react-bootstrap-icons';

function Lightbox(props) {
  return (
    <div className='Lightbox'>
      <XLg className='Lightbox-close' onClick={() => props.setShowModal(false)}/>
      
      <img className={(props.isComic) ? 'Lightbox-comic' : 'Lightbox-other'} 
           src={process.env.PUBLIC_URL + props.modalImg} 
           alt={props.modalAlt} 
       />

      { !props.isComic &&
        <div className='Lightbox-caption'>
          <b>{props.modalAlt}</b>
          <p>{props.modalCap}</p>
        </div>
      }
    </div>
  );
}

export default Lightbox;