import Card from '../Card/Card';
import styles from './BottomContentWrapper.module.scss';


const BottomContentWrapper = () => {
    const cardName = {
        foodRecipes : 'Food Recipes',
        workouts : 'Workouts',
        library : 'Library',
    }
    return (
        <>
            <div className = { styles.bottomWrapper } >
                <Card cardTitle = {cardName.foodRecipes} />
                <Card cardTitle = {cardName.workouts} />
                <Card cardTitle = {cardName.library} />
            </div>
        </>
    );
}

export default BottomContentWrapper;