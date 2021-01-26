import styles from './ArticleWrapper.module.scss';
import Image from '../../Image/Image';
import ContentWrapper from '../ContentWrapper/ContentWrapper'


const ArticleWrapper = () => {
    return (
        <section className = { styles.ArticleWrapper }>
            <Image />
            <ContentWrapper/>
        </section>

     );
}

export default ArticleWrapper;