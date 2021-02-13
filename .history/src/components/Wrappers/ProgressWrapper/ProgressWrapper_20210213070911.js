import ProgressElement from '../../ProgressElement/ProgressElement'
import styles from './ProgressWrapper.module.scss'

const ProgressWrapper = () => {

    const progressType = {
        Sleep : 'Sleep',
        Water : 'Water',
        Calories : 'Calories',
    }
    return (
        <div className={styles.progressWrapper}>
            <p className={styles.progressTitle}>Progress</p>
            <ProgressElement type={progressType.Sleep} progress = '85'/>
            <ProgressElement type={progressType.Water} progress = '50'/>
            <ProgressElement type={progressType.Calories} progress = '65'/>
        </div>
     );
}

export default ProgressWrapper;