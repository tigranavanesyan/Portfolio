import React, {useEffect, useState} from 'react';
import { FaCss3Alt} from "react-icons/fa";
import s from './SkillBar.module.css'

function SkillBar({percent}) {
    return (
        <div className={s.skillBar}>
            <div className={s.progress} style={{width: percent}}></div>
        </div>
    );
}

export default SkillBar;