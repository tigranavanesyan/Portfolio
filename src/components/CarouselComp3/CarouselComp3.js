import React from 'react';
import s from './CarouselComp3.module.css'
import Carousel from "nuka-carousel";

function CarouselComp3({data}) {
    const params={
        wrapAround:true,
        slidesToShow:4,
        slidesToScroll:2,
        autoplay:true,
        autoplayInterval:3000

    }
    return (
        <div className={s.wrapper}>
            <h1>My works</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.
            </p>
            <div className={s.carouselWrapper}>
                <Carousel {...params}>
                    {data.map(item=>{
                        return <div key={item.id}
                                    className={s.item}
                                    style={{backgroundImage: `url("../portfolio2/${item.id}.png")`}}
                        >
                        </div>
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default CarouselComp3;