import styles from './ProgressElement.module.scss'

const ProgressElement = ({type, elementColor , progress}) => {
    const typeElement = {
        Sleep : 'fa-bed',
        Water : 'fa-tint',
        Calories : 'fa-carrot'
    }

    const widthProportion = progress+'%'
    const progressBarStyle = () => ({
        width: widthProportion,
        backgroundColor: elementColor,
    })

    return (
        <div className={styles.progressElement}>
            <div className={ styles.progressHeader }>
                <div className={ styles.icon }>
                    <i color={elementColor} className={['fas', typeElement[type] ,'fa-2x'].join(' ')}></i>
                    <p className={ styles.iconText }>{type}</p>
                </div>
                <p className={[styles.elementColor, styles.iconProgress].join(' ')}>{progress + '%'}</p>
            </div>
            <div className= { styles.progressBar }>
                <div className={ styles.barBackground }></div>
                <div style={ progressBarStyle() } className={ styles.barForeground }></div>

            </div>
        </div>
     );
}

export default ProgressElement;