import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {setActiveLink} from "../../store/action/action";
import emailjs from '@emailjs/browser';
import s from './Contacts.module.css'
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

function Contacts(props) {
    const form = useRef();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveLink('/contacts'))
    }, []);

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    })

    const [errors, setErrors] = useState({})

    const notify = () => toast.success("Your message has been sent");

    const sendEmail = () => {
        emailjs.sendForm('service_9b19qu4', 'template_3rk1qsl', form.current, 'tRb_vl8lagf2-24X6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.from_name.trim()) {
            validationErrors.from_name = "Name is required"
        }
        if(!formData.from_email.trim()) {
            validationErrors.from_email = "Email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.from_email)){
            validationErrors.from_email = "Email is not valid"
        }
        if(!formData.message?.trim()) {
            validationErrors.message = "Message is required"
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0) {
            sendEmail()
            notify()
            setFormData({
                from_name:'',
                from_email:'',
                message:''
            })
        }
    }



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
                <form className={s.form}
                      ref={form}
                      onSubmit={handleSubmit}
                >
                    <div className={s.inputRow}>
                        {errors.from_name && <p>{errors.from_name}</p>}
                        <input type="text"
                               placeholder="name"
                               name="from_name"
                               className={s.input}
                               value={formData.from_name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className={s.inputRow}>
                        {errors.from_email && <p>{errors.from_email}</p>}
                        <input type="text"
                               name="from_email"
                               placeholder="email"
                               className={s.input}
                               value={formData.from_email}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={s.inputRow}>
                        {errors.message && <p>{errors.message}</p>}
                        <textarea
                            name="message"
                            className={s.textArea}
                            placeholder="message"
                            // cols="30"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button>Send</button>
                </form>
            </div>
            <div className={s.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100412.96644297054!2d44.54473624109513!3d40.1740119597408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1702975175418!5m2!1sru!2sam"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <ToastContainer
                pauseOnHover

            />
        </div>
    );
}

export default Contacts;

// import React from 'react';
//
// import { ToastContainer, toast } from 'react-toastify';

//
// function App(){
//     const notify = () => toast("Wow so easy!");
//
//     return (
//         <div>
//             <button onClick={notify}>Notify!</button>
//             <ToastContainer />
//         </div>
//     );
// }
