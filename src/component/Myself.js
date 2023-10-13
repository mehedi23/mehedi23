import React , { useState , useEffect } from 'react';
import '../static/css/about.css';
import Mehedi from '../static/img/me.svg'

const Myself = () => {

    const [ skillList , setSkillList ] = useState("");

    useEffect(() => {
        setSkillList(skills_list)
    },[])

    return (
        <section id="about">
            <div className="container">
                <div className="about-container">

                    <div className='services-tite about-tite'>
                        <div className="line"></div>
                        SOME
                        <span className="or-color">
                        ABOUT ME
                        </span>
                    </div>

                    <div className="mehedi_pic">
                        <img src={Mehedi} alt="mehedi"/>
                        <h1> MEHEDI HASSAN SATU </h1>
                    </div>

                    <div className="discribe-mySelf">
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>


                <div className="about-container">
                    <div className='services-tite about-tite'>
                        <div className="line"></div>
                        WHAT I KNOW
                        <span className="or-color">
                        (MY SKILIS)
                        </span>
                    </div>

                    <div className="skills-container" >

                        {
                            skillList &&

                            skillList.map(( iteam , index) => {
                                return <div className="skills-cards" key={index}>
                                            <div className="skills-cards-img">
                                                <img src={iteam.icons} alt={iteam.name}/>
                                            </div>
                
                                            <h1> {iteam.name} </h1>
                                        </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Myself;


const skills_list = [
    {
        id: 0 ,
        icons : "https://mineart.in/storage/cover/2020/10/13/U4Q6fFw4hYeDWF4lcLeTTVbrwgcCkVm9YCaqtr3t.png",
        name : "Javascripts"
    },
    {
        id: 1 ,
        icons : "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
        name : "React Js"
    },
    {
        id: 2 ,
        icons : "https://cdn.iconscout.com/icon/free/png-512/redux-283024.png",
        name : "Redux"
    },
    {
        id: 3 ,
        icons : "https://automationpanda.files.wordpress.com/2017/09/django-logo-negative.png",
        name : "Django"
    },
]
