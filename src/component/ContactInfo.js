import React , { useState } from 'react';
import '../static/css/contact-me.css';
import { Tween , ScrollTrigger } from 'react-gsap';
import {init} from 'emailjs-com';
import emailjs from 'emailjs-com';
import dealing from '../static/img/dealing.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from "react-loader-spinner";


const useStyles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: '#fff',
        },
        '& label': {
            color: '#fff',
        },
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            color: "#fff",
            marginLeft : 0 ,
            marginRight : 0 ,
            marginBottom : 0 ,
            marginTop : 16
        },
    },

    input:{
        color: "#fff"
    },
    sendButton:{
        background:"#fff",
        marginTop: 24,
        padding: '6px 35px',
        position: "relative",
        color : "#000",
        width : 180
    }
  }));

const ContactInfo = () => {
    const classes = useStyles();

    const [ email , setEmail ] = useState("");
    const [ subject , setSubject ] = useState("");
    const [ message , setMessage ] = useState("");
    const [ sendLoader , setSendLoader ] = useState(false);
    const [ successfullySend , setSuccessfullySend ] = useState(false);
    const [ errorSend , setErrorSend ] = useState(false);

    init(process.env.REACT_APP_USER_KEY);

    const sub_val = e => {
        setSubject(e.target.value)
    }

    const email_val = e => {
        setEmail(e.target.value)
    }

    const message_val = e => {
        setMessage(e.target.value)
    }
    
    const send_email = (e) => {
        e.preventDefault()
        // const data = new FormData(e.currentTarget);
        // console.log(data);
    }



    return (
        
        <section id="contact-me">
            <ScrollTrigger start="-300px center" end="1000px center" scrub={0.5}>
            <div className="container" special="flex">
    
                <div className="dealing-img">
                    <Tween to={{ scale: '1.4', }} duration={2} >
                        <img src={dealing} alt='dealing'/>
                    </Tween>
                </div>

                <div className="contact-me-info">

                    <div className="contact-title">
                        <div className="empty-lin"></div>
                        <span>CONTACT</span>
                        <span>ME</span>
                    </div>

                    <p className="contact-info-description">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking.
                    </p>

                    <form className={classes.root} id="contact-form">
                        <TextField
                            onChange={email_val}
                            label="Your E-mail Address" 
                            variant="outlined"
                            name='email'
                            required
                            type='email'
                        />
                         <TextField
                            onChange={sub_val}
                            label="Subject" 
                            variant="outlined" 
                            name='subject'
                            required
                        />
                        <TextField
                            onChange={message_val}
                            label="Your Message" 
                            variant="outlined" 
                            multiline
                            rows={10}
                            name='message'
                            required
                        />
                        
                        <Button 
                            onClick={send_email}
                            variant="contained" 
                            className={classes.sendButton}
                            type='submit'
                        >
                            Send

                            {
                                sendLoader &&

                                <div className="sending-loader">
                                    <Loader type="Oval" color="#FFF" height={30} width={30} />
                                </div>
                            }
                        </Button>
                    </form>


                    {
                        successfullySend &&
                        <p className="succesfully"> Send Succesfully </p>
                    }

                    {
                        errorSend &&
                        <p className="error"> 
                            Something is wrrong. Please try sometime later. Or directly comunicate
                            <a href="mailto:satusatusatu0@gmail.com">satusatusatu0@gmail.com</a>
                         </p>
                    }
                    

                </div>
                
                {/* <a href="mailto:someone@somewhere.com">email</a>
                <a href="tel:+8801741170568">email</a> */}
            </div>
            </ScrollTrigger>
        </section>
        
    )
}

export default ContactInfo
