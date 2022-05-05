import '../stylesheets/About.css';

import SelfPortrait from '../images/SelfPortrait.png';

import { Twitter, Youtube, Instagram } from 'react-bootstrap-icons';

function About() {
  return (
    <article className='About' id='About'>
      <h1>About Me</h1>
      <h2>Comic Artist • Animator • Illustrator</h2>

      <div className='About-socials'>
        <a href='https://twitter.com/ADelightfulGoof'><Twitter /></a>
        <a href='https://www.youtube.com/channel/UCE5-SualIBtQGj98c9d0tsg/about'><Youtube /></a>
        <a href='https://www.instagram.com/adelightfulgoof/?hl=en'><Instagram /></a>
      </div>
    </article>
  );
}

export default About;
