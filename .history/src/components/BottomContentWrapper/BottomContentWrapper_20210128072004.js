import classes from '*.module.css';
import Card from '../Card/Card';
import styles from './BottomContentWrapper.module.scss';


const BottomContentWrapper = () => {
    return (
        <>
            <div className = { styles.bottomWrapper } >
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    );
}

export default BottomContentWrapper;