import React from 'react';
import '../static/css/services.css';

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className='services-tite'>
                    <div className="line"></div>
                    SERVICE
                    <span className="or-color">S</span>
                </div>
            </div>

            <div className="container">
                <div className="services-box">
                    
                    <div className="services-car" types="ui/ux">
                        <div className="black-or-line">
                            <span></span>
                            <span></span>
                        </div>
                        
                        <h1> Ui/UX Design </h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                    </div>

                    <div className="services-car" types="devlopment">
                        <div className="black-or-line">
                            <span></span>
                            <span></span>
                        </div>
                        
                        <h1> APP/Web devlopment </h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                    </div>

                    <div className="services-car" types="maintenance">
                        <div className="black-or-line">
                            <span></span>
                            <span></span>
                        </div>
                        
                        <h1> Maintenance & Fix </h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
