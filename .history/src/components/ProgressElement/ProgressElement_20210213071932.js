import styles from './ProgressElement.module.scss'

const ProgressElement = ({type, progress}) => {
    const typeElement = {
        Sleep : 'fa-bed',
        Water : 'fa-tint',
        Calories : 'fa-carrot'
    }
    const elementColor = {
        Sleep : '#12BECC',
        Water : '#09SAD9',
        Calories : '#09D976'
    }
    const bgColor = () => ({
        backgroundColor: elementColor[type]
    })
    const widthProportion = progress+'%'
    const progressBarStyle = () => ({
        width: widthProportion
    })

    return (
        <div className={styles.progressElement}>
            <div className={ styles.progressHeader }>
                <div className={ styles.icon }>
                    <i  className={['fas', typeElement[type] ,'fa-2x'].join(' ')}></i>
                    <p className={ styles.iconText }>{type}</p>
                </div>
                <p className={[styles.elementColor, styles.iconProgress].join(' ')}>{progress + '%'}</p>
            </div>
            <div className= { styles.progressBar }>
                <div className={ styles.barBackground }></div>
                <div style={ progressBarStyle() & bgColor() } className={ styles.barForeground }></div>

            </div>
        </div>
     );
}

export default ProgressElement;