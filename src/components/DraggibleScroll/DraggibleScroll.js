import React, { useRef, useState } from "react";
import s from './DraggibleScroll.module.css'
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";


const ITEM_WIDTH = 150;

function DraggibleScroll({data}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();
    const handleScroll = (scrollAmount) => {
        const sliderWidth = containerRef.current.scrollWidth
        const newScrollPosition = scrollPosition + scrollAmount;
        if(newScrollPosition<0){
            setScrollPosition(0);
        }else if(newScrollPosition > sliderWidth-200) {
            setScrollPosition(sliderWidth-200);
        } else {
            setScrollPosition(newScrollPosition);
        }

        containerRef.current.scrollLeft = newScrollPosition;

    };
    return (
        <div className={s.container}>
            <div className={s.arrowWrapper}>
                <div ref={containerRef} className={s.scrollBar}>
                    <div className={s.contentBox}>
                        {data.map((item) => (
                            <div key={item} className={s.card}>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                </div>
                <button className={s.left} onClick={() => handleScroll(-ITEM_WIDTH)}>
                    <IoIosArrowDropleft />
                </button>
                <button className={s.right} onClick={() => handleScroll(ITEM_WIDTH)}>
                    <IoIosArrowDropright />
                </button>
            </div>

        </div>
    );
}

export default DraggibleScroll;



