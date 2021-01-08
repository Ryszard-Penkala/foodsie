import styles from './ArticleWrapper.module.scss';
import Image from '../../Image/Image';


const ArticleWrapper = () => {
    return (
        <section className = { styles.ArticleWrapper }>
            <h1>articlewrapper</h1>
            <Image />
        </section>

     );
}

export default ArticleWrapper;