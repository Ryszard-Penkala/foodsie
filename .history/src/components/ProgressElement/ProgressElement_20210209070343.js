import styles from './ProgressElement.module.scss'

const ProgressElement = () => {
    return (
        <div className={styles.progressElement}>
            <i class={['fas', 'fa-bed','fa-2x'].join(' ')}></i>
        </div>
     );
}

export default ProgressElement;