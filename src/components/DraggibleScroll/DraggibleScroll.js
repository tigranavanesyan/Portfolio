import React, {useLayoutEffect, useRef, useState} from "react";
import s from './DraggibleScroll.module.css'
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";


const ITEM_WIDTH = 150;

function DraggibleScroll({data}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [arrowLeftShow, setArrowLeftShow] = useState(0)
    const [arrowRightShow, setArrowRightShow] = useState(0)
    const containerRef = useRef();
    const arrowWrapperRef = useRef();
    useLayoutEffect(() => {
        const sliderWidth = containerRef.current.scrollWidth
        const arrowWrapperWidth = arrowWrapperRef.current.scrollWidth
        if (arrowWrapperWidth < sliderWidth){
            setArrowRightShow(1)
        }
    }, []);
    const handleScroll = (scrollAmount) => {
        const sliderWidth = containerRef.current.scrollWidth
        const newScrollPosition = scrollPosition + scrollAmount;
        if(newScrollPosition<0){
            setScrollPosition(0);
            setArrowLeftShow(0)
            setArrowRightShow(1)
        }else if(newScrollPosition > sliderWidth-200) {
            setScrollPosition(sliderWidth-200);
            setArrowLeftShow(1)
            setArrowRightShow(0)
        } else {
            setScrollPosition(newScrollPosition);
            setArrowLeftShow(1)
            setArrowRightShow(1)
        }
        containerRef.current.scrollLeft = newScrollPosition;
    };
    return (
        <div ref={arrowWrapperRef} className={s.arrowWrapper}>
            <div ref={containerRef} className={s.scrollBar}>
                <div className={s.contentBox}>
                    {data.map((item) => (
                        <div key={item} className={s.card}>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            {arrowLeftShow
                ?
                <button className={s.left} onClick={() => handleScroll(-ITEM_WIDTH)}>
                    <IoIosArrowDropleft/>
                </button>
                : null
            }
            {arrowRightShow
                ?
                <button className={s.right} onClick={() => handleScroll(ITEM_WIDTH)}>
                    <IoIosArrowDropright/>
                </button>
                : null
            }
        </div>
    );
}

export default DraggibleScroll;



