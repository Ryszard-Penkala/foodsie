import User from '../../User/User';
import styles from './SideWrapper.module.scss';
import User from '../../User/User'


const SideWrapper = () => {
    console.log('inne');
    return(
        <div className={styles.sideWrapper}>
            <User />
        </div>

    );
}

export default SideWrapper;