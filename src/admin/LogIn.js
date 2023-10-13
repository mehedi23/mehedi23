import React , {useState , useEffect} from 'react';
import {log_in} from '../store/auth';
import { useDispatch , useSelector  } from 'react-redux';
import { useHistory } from "react-router-dom";

const LogIn = () => {
    const [ e_mail  , setE_mail ] = useState("");
    const [ pass_word  , setPass_word ] = useState("");
    const dispatch = useDispatch();
    const history = useHistory()

    const auth = useSelector( state => state.auth.auth_verify )

    useEffect(()=>{
        auth && history.push("/admin/dashboard");
    },[ history , auth ]);

    const email_val = e => {
        setE_mail(e.target.value)
    };

    const pass_val = e => {
        setPass_word(e.target.value)
    };

    const submit = e => {
        e.preventDefault();

        if( e_mail.trim() && pass_word.trim()){
            const log_value = {
                email : e_mail ,
                password : pass_word
            };
    
            dispatch(log_in(log_value));
        };

    };

    return (
        <form className="log-in-form">
            <div>
                <input 
                    type="email" 
                    placeholder="Email"
                    required
                    onChange={email_val}
                />

                <input 
                    placeholder="Password" 
                    type="password" 
                    required
                    onChange={pass_val}
                />

                <button onClick={submit}> Log In </button>
            </div>
        </form>
    )
}

export default LogIn
