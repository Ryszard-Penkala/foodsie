import styles from './Image.module.scss';
import yogaImage from '../../assets/images/yogaII.jpg'

const Image = () => {
    return (
        <img className={ styles.articleImage } src={ yogaImage } alt="yoga"/>
     );
}

export default Image;