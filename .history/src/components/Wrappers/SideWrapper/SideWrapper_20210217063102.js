import User from '../../User/User';
import MotivationWrapper from '../MotivationWrapper/MotivationWrapper';
import ProgressWrapper from '../ProgressWrapper/ProgressWrapper';
import styles from './SideWrapper.module.scss';



const SideWrapper = () => {
    return(
        <div className={styles.sideWrapper}>
            {console.log({screen.width})}
            <User/>
            <MotivationWrapper motivation = '90' />
            <ProgressWrapper/>
        </div>

    );
}

export default SideWrapper;