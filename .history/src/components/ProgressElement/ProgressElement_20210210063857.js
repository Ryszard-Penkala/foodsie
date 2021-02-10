import styles from './ProgressElement.module.scss'

const ProgressElement = () => {
    return (
        <div className={styles.progressElement}>
            <div className={ styles.progressHeader }>
                <div className={ styles.icon }>
                    <i className={['fas', 'fa-bed','fa-2x', styles.elementColor].join(' ')}></i>
                    <p className={ styles.iconText }>Sleep</p>
                </div>
                <p className={[styles.elementColor, styles.iconProgress].join(' ')}>85%</p>
            </div>
        </div>
     );
}

export default ProgressElement;