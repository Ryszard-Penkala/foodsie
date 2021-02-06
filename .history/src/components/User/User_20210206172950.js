import React from 'react';
import styles from './User.module.scss'

const User = () => {
    return (
        <div className= {styles.userBlock} >
            <p className= {styles.userName}>Jan Kowalski</p>
        </div>
     );
}

export default User;