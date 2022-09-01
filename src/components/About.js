import '../stylesheets/About.scss';

//import SelfPortrait from '../images/SelfPortrait.png';
import portraitCard from '../images/portraitCard.png';
import Twitter from '../images/buttons/twitter.png';
import Youtube from '../images/buttons/youtube.png';
import Instagram from '../images/buttons/instagram.png';

function About() {
  return (
    <article className='About' id='About'>
      <div className='About-card'>
        <img src={portraitCard} alt='Portrait Card' />
      </div>
      
      <div className='About-text'>
        <h1>About Me</h1>
        <h2>Comic Artist • Animator • Illustrator</h2>

        <div className='About-socials'>
          <a href='https://twitter.com/ADelightfulGoof'>
            <img src={Twitter} alt='Twitter' />
          </a>
          <a href='https://www.youtube.com/channel/UCE5-SualIBtQGj98c9d0tsg/about'>
            <img src={Youtube} alt='Youtube' />
          </a>
          <a href='https://www.instagram.com/adelightfulgoof/?hl=en'>
            <img src={Instagram} alt='Instagram' />
          </a>
        </div>
      </div>
    </article>
  );
}

export default About;
