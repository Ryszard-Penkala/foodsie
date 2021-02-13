import ProgressElement from '../../ProgressElement/ProgressElement'
import styles from './ProgressWrapper.module.scss'

const ProgressWrapper = () => {
    return (
        <div className={styles.progressWrapper}>
            <p className={styles.progressTitle}>Progress</p>
            <ProgressElement type = 'Sleep'/>
            <ProgressElement type = 'Sleep'/>
            <ProgressElement type = 'Sleep'/>
        </div>
     );
}

export default ProgressWrapper;