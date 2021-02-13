import styles from './ProgressElement.module.scss'

const ProgressElement = (elementType) => {
    const typeElement = {
        Sleep : 'fa-bed',

    }

    return (
        <div className={styles.progressElement}>
            <div className={ styles.progressHeader }>
                <div className={ styles.icon }>
                    {console.log(typeElement[elementType])}
                    <i className={['fas', typeElement[elementType] ,'fa-2x', styles.elementColor].join(' ')}></i>
                    <p className={ styles.iconText }>Sleep</p>
                </div>
                <p className={[styles.elementColor, styles.iconProgress].join(' ')}>85%</p>
            </div>
            <div className= { styles.progressBar }>
                <div className={ styles.barBackground }></div>
                <div className={ styles.barForeground }></div>

            </div>
        </div>
     );
}

export default ProgressElement;