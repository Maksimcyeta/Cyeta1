import ContactForm from "./ContactForm";
import pic from '../resource/img/index-html/index-hero.jpg';

function AboutUs(){
    return(
        <div className="content aboutUs">
            <div className="flex-wrapper">
                <div className="aboutUs-content">
                    <h1 className="aboutUs-content__header">YOUR TRUSTED BUILDING PARTNER</h1>
                    <p className="aboutUs-content__text">
                        At Cyeta Limited, our commitment to excellence is evident in our track record of success.
                        With a portfolio boasting over 30 completed projects, we have a proven history of turning our
                        clients’ visions into reality.
                    </p>
                    <img className="aboutUs-content__image" src={pic} alt=""/>
                    <p className="aboutUs-content__text">
                        From custom homes and stunning renovations to innovative commercial spaces, each project
                        is a testament to our dedication to quality craftsmanship and meticulous attention to detail.
                        We take pride in the trust our clients place in us, and we look forward to adding your project to
                        our growing list of successes.
                    </p>
                </div>
                <div className="aboutUs-contact">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs