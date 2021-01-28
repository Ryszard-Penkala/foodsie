import Card from '../Card/Card';
import styles from './BottomContentWrapper.module.scss';


const BottomContentWrapper = () => {
    return (
        <>
            <div className = { styles.bottomWrapper } >
                <Card/>
            </div>
        </>
    );
}

export default BottomContentWrapper;