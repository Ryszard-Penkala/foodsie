import styles from './Card.module.scss'
import libPic from '../../assets/images/library.jpg'
import recPic from '../../assets/images/recipe.jpg'
import workPic from '../../assets/images/workouts.jpg'


const Card = ({cardTitle}) => {

    return (
        <>
            {libPic}
            <h3>{cardTitle}</h3>
        </>
     );
}

export default Card;