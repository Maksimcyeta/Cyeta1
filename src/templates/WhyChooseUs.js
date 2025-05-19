import picture1 from '../resource/img/index-html/why-choose-us-1.jpg';
import picture2 from '../resource/img/index-html/why-choose-us-2.jpg';

function WhyChooseUs(){
    return(
        <div className="content whyChooseUs">
            <h2 className="whyChooseUs-header">WHY CHOOSE US</h2>
            <div className="flex-wrapper">
                <div className="whyChooseUs-arguments">
                    <div className="whyChooseUs-arguments__item">
                        <div className="flex-wrapper">
                            <span className="argument-index">01</span>
                            <div>
                                <h3 className="argument-header">Experience</h3>
                                <p>
                                    With 5+ years in the industry in New Zealand and more than 10+ years overseas,
                                    we have a wealth of experience that ensures your project is in capable hands.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="whyChooseUs-arguments__item">
                        <div className="flex-wrapper">
                            <span className="argument-index">02</span>
                            <div>
                                <h3 className="argument-header">Skilled Team</h3>
                                <p>
                                    Our team consists of highly skilled professionals who take pride and
                                    responsibility in their work. We have the expertise to deliver exceptional results.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="whyChooseUs-arguments__item">
                        <div className="flex-wrapper">
                            <span className="argument-index">03</span>
                            <div>
                                <h3 className="argument-header">Quality Craftsmanship</h3>
                                <p>
                                    We believe in quality above all else. From the materials we use to the final
                                    finishing touches, our commitment towards your needs are unwavering.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="whyChooseUs-arguments__item">
                        <div className="flex-wrapper">
                            <span className="argument-index">04</span>
                            <div>
                                <h3 className="argument-header">Customer-Centric Approach</h3>
                                <p>
                                    Your satisfaction is our priority. We work closely with you at every step, listening
                                    to your ideas and preferences, to ensure your vision becomes a reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whyChooseUs-content">
                    <p className="whyChooseUs-content__text">
                        Experience the difference when you choose our services, where we place a premium on speed
                        and time efficiency. We recognize that our customers are eager to witness the transformative
                        results and invite friends and family to celebrate their upgraded homes. That’s why we
                        prioritize efficiency at every step of the project, ensuring you can enjoy the results sooner and
                        share the joy of your home’s transformation with loved ones.
                    </p>
                    <div className="flex-wrapper">
                        <img className="whyChooseUs-content__picture" src={picture1}/>
                        <img className="whyChooseUs-content__picture" src={picture2}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;