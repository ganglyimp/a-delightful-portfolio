import { React, useState } from 'react';
import '../stylesheets/Animation.css';

function Animation() {
  const youtubeIDs = ['2fcDqVS-P38', 'B8VZiynoKt4'];
  const [currVideo, setCurrVideo] = useState(youtubeIDs[0]);

  return (
    <article className="Animation" id='Animation'>
      <h1>Animation</h1>

      <div className='animation-content'>
        <div className='animation-thumbnails column'>
          { youtubeIDs && youtubeIDs.map((item, index) => {
              return(
                <img src={`https://img.youtube.com/vi/${item}/0.jpg`} 
                     alt={`thumbnail-${index}`} 
                     onClick={() => {setCurrVideo(youtubeIDs[index])}}
                />
              )
            })
          }
        </div>

        <div className='animation-video column'>
          <iframe src={`https://www.youtube.com/embed/${currVideo}`} 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen>
          </iframe>
        </div>
      </div>
    </article>
  );
}

export default Animation;
