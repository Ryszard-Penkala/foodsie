import styles from './Image.module.scss';
import yogaImage from '../../assets/images/yoga II'

const Image = () => {
    return (
        <img className={ styles.articleImage } src={ yogaImage } alt="yoga"/>
     );
}

export default Image;