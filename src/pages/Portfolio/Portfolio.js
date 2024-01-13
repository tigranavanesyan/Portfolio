import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setActiveLink} from "../../store/action/action";
import PortfolioItem from "../../components/PortfolioItems/PortfolioItem";
import s from './Portfolio.module.css'
import {Link} from "react-router-dom";
import works from "../../data/works";
import {Pagination} from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

function Portfolio(props) {
    const itemsPerPage = 6; // Set the number of items per page

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setActiveLink('/portfolio'))
    }, []);

    return (
        <div className={"containerSecond"}>
            <h2 className={s.title}>My Recent Work</h2>
            <p className={s.desc}>
                Here are a few past projects I've worked on. Want to see more?
                <Link to={"/contacts"}> Email me</Link>
            </p>
            <div>
                <PaginationComponent data={works} itemsPerPage={itemsPerPage}/>
            </div>
        </div>
    );
}

export default Portfolio;