import React from "react";
import shape from '../../images/ct-shape.png'


const ContactInfo = (props) => {
    return (
        <section className="contact-info-section section-padding">
            <div className="container">
                <div className="office-info">
                    <div className="row">
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="office-info-item">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-place"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <p>Greater Manchester, 
                                        United kingdom.</p>
                                    <span>U.K, Office Address.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="office-info-item active">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <p>+44 7823 640407</p>
                                    <p>+44 7823 640407</p>
                                    <span>call us today</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                            <div className="office-info-item">
                                <div className="office-info-icon">
                                    <div className="icon">
                                        <i className="fi flaticon-email"></i>
                                    </div>
                                </div>
                                <div className="office-info-text">
                                    <p>meluckit@gmail.com</p>
                                    <p>clinton.dandison@aspireclimate.org</p>
                                    <span>EMAIL ADDRESS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ct-shape">
                <img src={shape} alt="shape"/>
            </div>
        </section>
    );
}

export default ContactInfo;
