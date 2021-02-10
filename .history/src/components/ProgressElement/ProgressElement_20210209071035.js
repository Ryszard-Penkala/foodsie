import styles from './ProgressElement.module.scss'

const ProgressElement = () => {
    return (
        <div className={styles.progressElement}>
            <i class={['fas', 'fa-bed','fa-2x', styles.iconColor].join(' ')}></i>
            <p>Sleep</p>
            <p>85%</p>
        </div>
     );
}

export default ProgressElement;