import ProgressElement from '../../ProgressElement/ProgressElement'
import styles from './ProgressWrapper.module.scss'

const ProgressWrapper = () => {

    const progressType = {
        Sleep : 'Sleep',
        Water : 'Water',
        Calories : 'Calories',
    }

    const color = {
        Sleep : '#12BECC',
        Water : '#095AD9',
        Calories : '#09D976'
    }

    return (
        <div className={styles.progressWrapper}>
            <p className={styles.progressTitle}>Progress</p>
            <ProgressElement type={progressType.Sleep} elementColor={color.Sleep} progress = '85'/>
            <ProgressElement type={progressType.Water} elementColor={color.Water} progress = '50'/>
            <ProgressElement type={progressType.Calories} elementColor={color.Calories} progress = '65'/>
        </div>
     );
}

export default ProgressWrapper;