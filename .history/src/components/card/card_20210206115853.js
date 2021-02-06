import styles from './Card.module.scss'
import libPic from '../../assets/images/library.jpg'
import recPic from '../../assets/images/recipe.jpg'
import workPic from '../../assets/images/workouts.jpg'


const Card = ({cardTitle} className = {module.card}) => {

    const cardName = {
        foodRecipes : 'Food Recipes',
        workouts : 'Workouts',
        library : 'Library',
    }

    const cardPic = {
        foodRecipes : recPic,
        workouts : workPic,
        library : libPic,
    }


    return (
        <>
            <img src={cardPic[cardTitle]} alt={cardName[cardTitle] + ' picture'}/>
            <h3>{cardName[cardTitle]}</h3>
        </>
     );
}

export default Card;