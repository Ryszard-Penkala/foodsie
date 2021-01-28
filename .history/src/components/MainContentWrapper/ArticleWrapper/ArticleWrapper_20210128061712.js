import styles from './ArticleWrapper.module.scss';
import Image from '../../Image/Image';
import ContentWrapper from '../ContentWrapper/ContentWrapper'


const ArticleWrapper = () => {
    return (
        <section className = { styles.ArticleWrapper }>
            <div className="image">
                <Image />
            </div>
            <ContentWrapper/>
        </section>

     );
}

export default ArticleWrapper;