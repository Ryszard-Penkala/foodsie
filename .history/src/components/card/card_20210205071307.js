import styles from './Card.module.scss'
import libPic from '../../assets/images/library.jpg'

const Card = ({cardTitle}) => {
    const path = ''
    return (
        <>
            <img src={libPic} alt="library"/>
            <h3>{cardTitle}</h3>
        </>
     );
}

export default Card;