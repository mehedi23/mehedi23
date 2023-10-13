import React from 'react';
import '../static/css/top.css';
import BgImg from '../static/img/bg.jpg';
import Logo from '../static/img/logo.png';

const Topintro = () => {
    return (
        <section id="top">
            <img className="top-bg-img" src={BgImg} alt="black-white"/>

            <div className="container">
                <div className="top-summerice">
                    <h1 className="top-title-one">
                        <div className="line"></div>
                        WEB DESIGNS , DEVLOPMENT , DEPLOYMENT
                    </h1>

                    <h1 className="top-title-two">
                        I Have A Passion For Creating Creative, Unique And  Up To Date  Designs
                    </h1>

                    <p className="top-dicription">
                        Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior
                        started to roll out as stationary material. Once the brand strategy was sharp and real for everyone
                        inside of the company,
                    </p>
                </div>
            </div>

            <div className="nav-wrapper">
                <a className="the_logo" href="/portfolio">
                    <img src={Logo} alt="m tech logo" />
                </a>
                

                <div className="nav_links">
                    <a name="refresh" href="/portfolio">REFRESH</a>
                    <a name="services" href="#services">SERVICES</a>
                    <a name="portfolio" href="#portfolio">PORTFOLIO</a>
                    <a name="about_me" href="#about">ABOUT ME</a>
                </div>
            </div>
        </section>
    )
}

export default Topintro
