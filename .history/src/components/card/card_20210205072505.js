import styles from './Card.module.scss'
import libPic from '../../assets/images/library.jpg'
import recPic from '../../assets/images/recipe.jpg'
import workPic from '../../assets/images/workouts.jpg'


const Card = ({cardTitle}) => {

    const cardName = {
        foodRecipes : 'Food Recipes',
        workouts : 'Workouts',
        library : 'Library',
    }


    return (
        <>
            {console.log(card.cardName.cardTitle)}
            <h3>{cardName.cardTitle}</h3>
        </>
     );
}

export default Card;