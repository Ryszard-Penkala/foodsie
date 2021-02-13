import ProgressElement from '../../ProgressElement/ProgressElement'
import styles from './ProgressWrapper.module.scss'

const ProgressWrapper = () => {
    return (
        <div className={styles.progressWrapper}>
            <p className={styles.progressTitle}>Progress</p>
            <ProgressElement elementType = 'Sleep'/>
            <ProgressElement elementType = 'Sleep'/>
            <ProgressElement elementType = 'Sleep'/>
        </div>
     );
}

export default ProgressWrapper;