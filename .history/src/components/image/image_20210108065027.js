import styles from './Image.module.scss';
import AppContext from '../../context';
import yogaImage from '../../assets/images/yogaII.jpg';

const Image = () => {
    return (
        <AppContext.Consumer>
            { (context) =>(
                <img className={ styles.articleImage } src={ context } alt="yoga"/>
                {console.log(context)}
            )}

        </AppContext.Consumer>
     );
}

export default Image;