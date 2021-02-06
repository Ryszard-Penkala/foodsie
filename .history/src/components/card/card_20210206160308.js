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

    const cardLink = {
        foodRecipes : 'https://www.bbcgoodfood.com/recipes/category/all-healthy',
        workouts : 'https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday',
        library : 'https://www.medicinenet.com/healthy_living/article.htm',
    }

    const cardPic = {
        foodRecipes : recPic,
        workouts : workPic,
        library : libPic,
    }


    return (
        <a className={[styles.cardLink, styles.bounce].join(' ')} href={cardLink[cardTitle]} target="_blank" rel="noreferrer">
            <div className={styles.card}>
            <img className={styles.cardImg} src={cardPic[cardTitle]} alt={cardName[cardTitle] + ' picture'}/>
            <h3 className={styles.cardH3}>{cardName[cardTitle]}</h3>
            <h4 className={styles.cardH4}>discover</h4>
        </div>
        </a>
     );
}

export default Card;