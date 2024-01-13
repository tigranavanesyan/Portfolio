import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setActiveLink} from "../../store/action/action";
import TechStack from "../../components/TechStack/TechStack";
import TabsByCategories from "../../components/TabsByCategories/TabsByCategories";

function About(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveLink('/about'))
    }, []);

    return (
        <div className={'containerSecond'}>
            <TechStack/>
            <TabsByCategories/>
        </div>
    );
}

export default About;