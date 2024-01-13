import React, {useEffect, useState} from 'react';
import s from './FAQ.module.css'
import {Accordion, Spinner} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setActiveLink} from "../../store/action/action";
import faq from '../../data/FAQdata'


function Faq(props) {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },1000)
        dispatch(setActiveLink('/faq'))
    }, []);
    if(loading){
        return (
            <div className={'spinnerWrapper'}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

        )
    } else {
        return (
            <div className={'containerSecond'}>
                <h1 className={s.h1}>frequently asked questions</h1>
                <Accordion>
                    {faq.map(item=>(
                        <Accordion.Item eventKey={item.id}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        );
    }
}

export default Faq;