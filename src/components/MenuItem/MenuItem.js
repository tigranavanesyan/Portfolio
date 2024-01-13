import React from 'react';
import styles from "./MenuItem.module.css"

function MenuItem({image,title}) {
    return (
        <div className={styles.wrapper}>
            <img src={image}/>
            <div className={styles.text}>
                <h3>{title}</h3>
            </div>

        </div>
    );
}

export default MenuItem;