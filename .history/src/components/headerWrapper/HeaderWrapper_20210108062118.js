import React from 'react';
import styles from "./HeaderWrapper.module.scss";
import StandardButton from "../button/StandardButton";
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'


class HeaderWrapper extends React.Component {
    state = {
        imageLink : '../../assets/images/yoga II.jpg'
    }

    render(){
        return (
            <>
                <section className={ styles.wrapper }>
                    <h1 className={styles.wrapper}> HeaderWrapper </h1>
                    <StandardButton> Popular </StandardButton>
                    <StandardButton> Suggested </StandardButton>
                    <StandardButton> Extreme </StandardButton>
                    <h1 className= { styles.wrapper} > headerWrapperBottom</h1>
                    <ArticleWrapper />
                </section>
            </>
         )
    }
}

export default HeaderWrapper;
