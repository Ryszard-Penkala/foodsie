import Card from '../Card/Card';
import styles from './BottomContentWrapper.module.scss';


const BottomContentWrapper = () => {
    const cardName = {
        foodRecipes : 'food recipes',
    }
    return (
        <>
            <div className = { styles.bottomWrapper } >
                <Card cardTitle = cardName.foodRecipes />
            </div>
        </>
    );
}

export default BottomContentWrapper;