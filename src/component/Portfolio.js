import React, { useEffect} from 'react';
import '../static/css/portfolio.css';
import svgLogo from '../static/svg__';
import Button from '@material-ui/core/Button';
import {Tween, ScrollTrigger} from 'react-gsap';
// import { useDispatch , useSelector  } from 'react-redux';
// import {testimonial_get_data} from '../store/testimonial'

const Portfolio = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(testimonial_get_data({
    //         limit : 100,
    //         page : 1
    //     }))
    // }, [dispatch])


    return (
        <ScrollTrigger start="200px center" end="200px center" scrub={1}>
            <Tween
                from={{
                background: "#000"
            }}
                to={{
                background: "#fff"
            }}>

                <section id="portfolio">
                    <div className="container">
                        <div className="portfolio-title">
                            {svgLogo}
                            <h1>PORTFOLIO</h1>
                        </div>
                        <p className="portfolio-title-extra">( Check out some of my ideas )</p>
                    </div>

                    <div className="container">
                        <div className="portfolios-gellary">

                            {testimonial_result && testimonial_result.map((item, index) => {
                                return  <a className="portfolio_box" href={item.link} key={index} target="_blank" rel="noreferrer">
                                            <div
                                                className="portfolios-img-box"
                                                style={{
                                                backgroundImage: `url(${item.img})`
                                            }}>
                                                <Button className="visit_btn">
                                                    Visit Now
                                                </Button>
                                            </div>
                                            <h1>{item.title}</h1>
                                            <p>{item.sub_title}</p>
                                        </a>
                            })
}

                        </div>
                    </div>
                </section>
            </Tween>
        </ScrollTrigger>
    )
}

export default Portfolio;


const testimonial_result = []