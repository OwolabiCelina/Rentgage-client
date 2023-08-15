 import React from 'react'
 import HomeNewslettersignupForm from '../molecules/HomeNewslettersignupForm'
// import CuteEmo from '../../../assets/icons/cute-emo.svg';
// import RightFingerEmo from '../../../assets/icons/right-finger-emo.svg';
// import LeftFingerEmo from '../../../assets/icons/left-finger-emo.svg';
import theNationLogo from '../../../assets/images/the-nation-logo.svg';
import FCMBLogo from '../../../assets/images/fcmb-logo.svg';


const HomeNewsletterSection = () => {
  return (
    <section className="letter">
        <div className="letter_1 container">
            <div className="letter_h1_1">
                <h1 className='new_gold'>
                    Be the first to know when we launch, and get exclusive
                    <br /> 
                    information about our product.
                </h1>
            </div>
            {/* <div className="letter_p_1">
                <p>
                We’ll like to gist you regularly about what we’re doing at rentgage
                </p>
                <div className="letter_img_1">
                    <img src={CuteEmo} alt="cute logo" />
                    <img src={RightFingerEmo} alt="Right finger" />
                    <img src={LeftFingerEmo} alt="Left finger" />
                </div>
            </div> */}
                <div className='letter_signup'>
                    <HomeNewslettersignupForm />
                </div>
                <div className="letter_p_2">
                   
                    <p>Featured In</p>                   
                   <a href="https://www.google.com/amp/s/thenationonlineng.net/african-fintech-foundry-prepares-startups-for-investors/amp/" target="_blank" rel="noopener noreferrer"><img src={theNationLogo} alt="the nation" /></a>
                </div>
                <div className="letter_p_3">
                    <p>In partnership with</p>
                    <a href="https://www.fcmb.com/hub-one/event.php?a=Hub%20One%20Epic%20Ideas" target="_blank" rel="noopener noreferrer"><img className ="fcmb" src={FCMBLogo} alt="FCMB" /></a>
                </div>
            </div>
    </section>
  )
}

export default HomeNewsletterSection