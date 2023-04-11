import '../styles/Footer.css';
import locatorSVG from '../styles/svgs/locator.svg';
import twitterLogo from '../styles/svgs/twitter.svg';
import facebookLogo from '../styles/svgs/facebook.svg';
import youtubeLogo from '../styles/svgs/youtube.svg';
import instagramLogo from '../styles/svgs/instagram.svg';

const linksLeft = ['GIFT CARDS', 'PROMOTIONS', 'FIND A STORE', 'SIGN UP FOR EMAIL', 'BECOME A MEMBER', 'NIKE JOURNAL', 'SEND US FEEDBACK'];
const linksMiddle = ['Order Status', 'Shipping and Delivery', 'Returns', 'Order Cancellation', 'Payment Options', 'Gift Card Balance', 'Contact Us'];
const linksRight = ['News', 'Careers', 'Investors', 'Purpose', 'Sustainability'];

const linksBottomRightTop = ['Guides', 'Terms of Sale', 'Terms of Use', 'Nike Privacy Policy', 'Your Privacy Choices'];
const Footer = () => {
  const hoverOn = (event) => {
    event.target.style.transition = 'opacity 0.1s ease-in-out';
    event.target.style.opacity = 1;
  };
  const hoverOff = (event) => {
    event.target.style.opacity = 0.5;
  };

  return (
    <>
      <footer className='Footer'>
        <div id='footer-top'>
          <div id='footer-top-left'>
            <div className='accordion-body'>
              {linksLeft.map((link) => (
                <p className='link-bold'>{link}</p>
              ))}
            </div>
            <div
              className='accordion-body'
              id='get-help-section'
            >
              <p className='link-bold'>GET HELP</p>
              {linksMiddle.map((link) => (
                <p className='link-gray'>{link}</p>
              ))}
            </div>
            <div
              className='accordion-body'
              id='about-nike-section'
            >
              <p className='link-bold'>ABOUT NIKE</p>
              {linksRight.map((link) => (
                <p className='link-gray'>{link}</p>
              ))}
            </div>
          </div>
          <div id='footer-top-right'>
            <img
              onMouseOver={hoverOn}
              onMouseOut={hoverOff}
              className='socialSVGs'
              src={twitterLogo}
              alt='twitter'
            />
            <img
              onMouseOver={hoverOn}
              onMouseOut={hoverOff}
              className='socialSVGs'
              src={facebookLogo}
              alt='facebook'
            />
            <img
              onMouseOver={hoverOn}
              onMouseOut={hoverOff}
              className='socialSVGs'
              src={youtubeLogo}
              alt='youtube'
            />
            <img
              onMouseOver={hoverOn}
              onMouseOut={hoverOff}
              className='socialSVGs'
              src={instagramLogo}
              alt='instagram'
            />
          </div>
        </div>
        <div id='footer-bottom'>
          <div id='loc-copy'>
            <div id='location'>
              <div id='locator-svg'>
                <img
                  src={locatorSVG}
                  alt='locator-svg'
                />
              </div>
              <p id='curr-country'>United States</p>
            </div>
            <p id='copyright-disc'>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          <div id='footer-bottom-right'>
            <div id='f-bottom-right-top'>
              {linksBottomRightTop.map((link) => (
                <p className='link-gray'>{link}</p>
              ))}
            </div>
            <div
              id='f-bottom-right-bottom'
              className='link-gray'
            >
              CA Supply Chains Act
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
