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

    const cardPic = {
        foodRecipes : recPic,
        workouts : workPic,
        library : libPic,
    }


    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={cardPic[cardTitle]} alt={cardName[cardTitle] + ' picture'}/>
            <h3>{cardName[cardTitle]}</h3>
            <h4 cardH4>discover</h4>
        </div>
     );
}

export default Card;