import User from '../../User/User';
import MotivationWrapper from '../MotivationWrapper/MotivationWrapper';
import styles from './SideWrapper.module.scss';



const SideWrapper = () => {
    console.log('inne');
    return(
        <div className={styles.sideWrapper}>
            <User/>
            <MotivationWrapper motivation = '90' />
        </div>

    );
}

export default SideWrapper;