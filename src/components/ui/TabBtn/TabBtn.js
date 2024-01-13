import React from 'react';
import styles from "./TabBtn.module.css"

function TabBtn({text,tabChange,active,id}) {
    return (
        <div
            className={active? styles.wrapperActive: styles.wrapper}
            onClick={()=>tabChange(text,id)}
        >
            <span className={styles.span}>{text}</span>
        </div>
    );
}

export default TabBtn;