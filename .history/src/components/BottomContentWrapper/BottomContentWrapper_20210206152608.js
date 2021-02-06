import Card from '../Card/Card';
import styles from './BottomContentWrapper.module.scss';


const BottomContentWrapper = () => {

    return (
        <>
            <div className = { styles.bottomWrapper styles.bounce } >
                <Card cardTitle = 'foodRecipes' />
                <Card cardTitle = 'workouts' />
                <Card cardTitle = 'library' />
            </div>
        </>
    );
}

export default BottomContentWrapper;