import styles from './ArticleWrapper.module.scss';
import Image from '../../Image/Image';


const ArticleWrapper = () => {
    return (
        <section className = { styles.ArticleWrapper }>
            <Image />
        </section>

     );
}

export default ArticleWrapper;