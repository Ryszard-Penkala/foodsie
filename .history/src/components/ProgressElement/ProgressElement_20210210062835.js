import styles from './ProgressElement.module.scss'

const ProgressElement = () => {
    return (
        <div className={styles.progressElement}>
            <div className={ styles.icon }>
                <i className={['fas', 'fa-bed','fa-2x', styles.elementColor].join(' ')}></i>
                <p>Sleep</p>
            </div>
            <p className={styles.elementColor}>85%</p>
        </div>
     );
}

export default ProgressElement;