import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setActiveLink} from "../../store/action/action";
import Welcome from "../../components/Welcome/Welcome";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import works from '../../data/works'
import CarouselComp3 from "../../components/CarouselComp3/CarouselComp3";

function Home(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveLink('/'))
    }, []);

    return (
        <div>
            <Welcome/>
            <CarouselComp data={works}/>
            <CarouselComp3 data={works}/>
        </div>
    );
}

export default Home;