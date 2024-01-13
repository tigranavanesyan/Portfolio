import React from 'react';
import s from './TeckStack.module.css'
import SkillBar from "../SkillBar/SkillBar";

import data from '../../data/skils'


function TechStack(props) {
    return (
        <div>
            <h2>My Tech Stack</h2>
            <p>
                Technologies I’ve been working with recently
            </p>
            <div className={s.iconsGrid}>
                {data.map((item)=> (
                    <div key={item.id} className={s.icon}>
                        <div style={{color:item.fill}}>
                            {item.icon}
                        </div>
                        <p>
                            {item.skill}
                        </p>
                        <SkillBar percent={item.percentage}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;