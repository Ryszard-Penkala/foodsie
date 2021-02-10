import styles from './ProgressElement.module.scss'

const ProgressElement = () => {
    return (
        <div className={styles.progressElement}>
            <div className={ styles.icon }>
                <i className={['fas', 'fa-bed','fa-2x', styles.elementColor].join(' ')}></i>
                <p className={ styles.iconText }>Sleep</p>
            </div>
            <div className={[styles.elementColor, styles.iconProgress].join(' ')}>85%</div>
        </div>
     );
}

export default ProgressElement;