import React from 'react';
import s from './CarouselComp.module.css'
import {Carousel} from "react-bootstrap";

function CarouselComp({data}) {
    return (
        <div className={s.wrapper}>
            <div className={'containerSecond'}>
                <Carousel
                    controls={true}
                    defaultActiveIndex={1}
                >
                    {data.map((item,ind)=>{
                        return <Carousel.Item key={item.id}>
                            <div className={s.item}
                                 style={{backgroundImage:`url("../portfolio2/${item.id}.png")`}}
                            >
                            </div>
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </div>

    );
}

export default CarouselComp;