import React, { useRef , useState} from 'react'
import './JoinUs.css'
import emailjs from '@emailjs/browser';
export const JoinUs = () => {

    const form = useRef();
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wtszgxp', 'template_i1fvmgk', form.current, '9kpXtsgKCEiwhKJwb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        setMessage('Sent, Thank you !')

    };


    return (
        <div className="joinUs" id="joinUs">
            <div className="left-j">
                <div className='line'></div>

                <div>
                    <span className='stroke-text'>READY TO</span>
                    {' '}
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    {' '}
                    <span className='stroke-text'>WITH US ?</span>
                </div>
            </div>


            <div className="right-j">

                <form ref={form} onSubmit={sendEmail}>
                    <div className="emailContainer">
                        <input type="email" name="user_email" id="email" placeholder='Enter Your Email Adress Here' required />
                        <input type="hidden" name="project" id="project" value="fitClub" />
                        <button className='btn btn-j'>Join Now</button>
                    </div>

                    <div className="Joined">
                        <p>{message}</p>
                    </div>

                </form>

            </div>
        </div>
    )
}
