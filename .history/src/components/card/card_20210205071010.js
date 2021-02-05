import styles from './Card.module.scss'

const Card = ({cardTitle}) => {
    const path = ''
    return (
        <img src="../../assets/images/library.jpg" alt="library"/>
        <h3>{cardTitle}</h3>
     );
}

export default Card;