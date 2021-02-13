import styles from './ProgressElement.module.scss'

const ProgressElement = ({type, progress}) => {
    const typeElement = {
        Sleep : 'fa-bed',
        Water : 'fa-tint',
        Calories : 'fa-carrot'
    }

    return (
        <div className={styles.progressElement}>
            <div className={ styles.progressHeader }>
                <div className={ styles.icon }>
                    <i className={['fas', typeElement[type] ,'fa-2x', styles.elementColor].join(' ')}></i>
                    <p className={ styles.iconText }>Sleep</p>
                </div>
                <p className={[styles.elementColor, styles.iconProgress].join(' ')}>progress+%</p>
            </div>
            <div className= { styles.progressBar }>
                <div className={ styles.barBackground }></div>
                <div className={ styles.barForeground }></div>

            </div>
        </div>
     );
}

export default ProgressElement;