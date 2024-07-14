import React from 'react';
import s from './PortfolioItem.module.css'
import DraggibleScroll from "../DraggibleScroll/DraggibleScroll";
import ReactStars from "react-rating-stars-component";

function PortfolioItem({work}) {
    if(work){
        return (
            <div className={s.wrapper}>
                <div className={s.hover}>
                    <h4>{work.title}</h4>
                    <div className={s.btns}>
                        <button>
                            {work.url ? <a href={work.url} target='_blank' rel='noreferrer'>view live</a>:"view live"}
                        </button>
                        <button>
                            {work.urlGitHub ? <a href={work.urlGitHub} target='_blank' rel='noreferrer'>github</a>:"github"}
                        </button>
                    </div>
                </div>
                <img src={work.image} alt='image'/>
                <p className={s.desc}>
                    {work.title}
                </p>
                <div className={s.technologies}>
                    <h3>Technologies</h3>
                    <div className={s.starsRow}>
                        <span>
                           <ReactStars size={24} value={work.rating || 0}/>
                        </span>
                        <span>rated by researchers</span>
                    </div>
                    <div className={s.skills}>
                    <DraggibleScroll data={work.technologies}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default PortfolioItem;