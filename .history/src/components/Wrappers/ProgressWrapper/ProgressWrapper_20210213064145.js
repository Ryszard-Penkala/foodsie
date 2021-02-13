import ProgressElement from '../../ProgressElement/ProgressElement'
import styles from './ProgressWrapper.module.scss'

const ProgressWrapper = () => {
    return (
        <div className={styles.progressWrapper}>
            <p className={styles.progressTitle}>Progress</p>
            <ProgressElement type = 'Sleep' progress = '85'/>
            <ProgressElement type = 'Water' progress = '50'/>
            <ProgressElement type = 'Calories' progress = '65'/>
        </div>
     );
}

export default ProgressWrapper;