const ContactUsFooter=(props)=>{
    return(
        <div className="background">
            <div className="content contactUs-Footer">
                <div className="contactUs-Footer__item1">
                    <h2>
                        {props.footerH1}
                    </h2>
                    <button className="btn">Contact us</button>
                </div>
                <div>
                    <h3>Timeline & Budget</h3>
                    <p>
                        The project was completed within the estimated
                        timeline of 15 months and remained within the
                        agreed-upon budget thanks to our diligent project
                        management and cost-effective solutions.
                    </p>
                </div>
                <div>
                    <h3>Durability Guarantee</h3>
                    <p>
                        We take great pride in our commitment to quality
                        and longevity. As with all our projects, we offer a
                        guarantee that this new build home is constructed
                        to the highest standards, ensuring it will stand the
                        test of time.
                    </p>
                </div>
                <div>
                    <h3>Safety and Compliance</h3>
                    <p>
                        Throughout the project, safety was paramount. We
                        adhered to all local building codes and regulations,
                        obtaining the necessary permits and inspections to
                        guarantee compliance.
                    </p>
                </div>
                <div>
                    <h3>Materials and Suppliers</h3>
                    <p>
                        We sourced premium construction materials and
                        fixtures from reputable suppliers to create a home
                        that exemplifies comfort and durability.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactUsFooter