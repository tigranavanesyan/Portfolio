import React, {useEffect,useRef} from 'react';
import {useDispatch} from "react-redux";
import {setActiveLink} from "../../store/action/action";
import emailjs from '@emailjs/browser';
import s from './Contacts.module.css'

function Contacts(props) {
    const form = useRef();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveLink('/contacts'))
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9b19qu4', 'template_3rk1qsl', form.current, 'tRb_vl8lagf2-24X6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={"containerSecond"}>
            <h1 className={s.title}>Send me a massage</h1>
            <div className={s.content}>
                <div className={s.imgContainer}>
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/web-development-2/512/keyboard_working_coding_process_computer_device_programming_writing_typing_sketching_flat_design_icon-1024.png"
                        alt="contacts"
                        className={s.image}
                    />
                </div>
                <form className={s.form} ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="name" name="from_name" className={s.input}/>
                    <input type="email" name="from_email" placeholder="email" className={s.input}/>
                    <textarea
                        name="message"
                        className={s.textArea}
                        placeholder="message"
                        cols="30"
                        rows="5"
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
            <div className={s.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100412.96644297054!2d44.54473624109513!3d40.1740119597408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1702975175418!5m2!1sru!2sam"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
    // return (
    //     <form ref={form} onSubmit={sendEmail}>
    //         <label>Name</label>
    //         <input type="text" name="from_name" />
    //         <label>Email</label>
    //         <input type="email" name="from_email" />
    //         <label>Message</label>
    //         <textarea name="message" />
    //         <input type="submit" value="Send" />
    //     </form>
    // );
}

export default Contacts;
