import { React} from 'react';
import '../stylesheets/Lightbox.css';

import { XLg } from 'react-bootstrap-icons';

function Lightbox(props) {
  return (
    <div className='Lightbox'>
      <XLg className='Lightbox-close' onClick={() => props.setShowModal(false)}/>
      
      <img className={(props.isComic) ? 'Lightbox-comic' : 'Lightbox-other'} 
           src={process.env.PUBLIC_URL + props.modalImg} 
           alt={props.modalAlt} 
       />
    </div>
  );
}

export default Lightbox;