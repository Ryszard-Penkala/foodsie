import User from '../../User/User';
import MotivationWrapper from '../MotivationWrapper/MotivationWrapper';
import ProgressWrapper from '../ProgressWrapper/ProgressWrapper';
import styles from './SideWrapper.module.scss';



const SideWrapper = () => {
    const [first, second, third] = window.screen.width > 1076
        ? [<User/>,
        <MotivationWrapper motivation = '90' />,
        <ProgressWrapper/>]
        : [[<User/>,
            <ProgressWrapper/>,
            <MotivationWrapper motivation = '90' />]

    return(
        <div className={styles.sideWrapper}>
            {first}
            {second}
            {third}
        </div>

    );
}

export default SideWrapper;