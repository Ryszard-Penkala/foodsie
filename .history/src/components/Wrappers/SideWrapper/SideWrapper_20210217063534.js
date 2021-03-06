import User from '../../User/User';
import MotivationWrapper from '../MotivationWrapper/MotivationWrapper';
import ProgressWrapper from '../ProgressWrapper/ProgressWrapper';
import styles from './SideWrapper.module.scss';



const SideWrapper = () => {
    console.log(screen.width)
    return(
        <div className={styles.sideWrapper}>
            <User/>
            <MotivationWrapper motivation = '90' />
            <ProgressWrapper/>
        </div>

    );
}

export default SideWrapper;