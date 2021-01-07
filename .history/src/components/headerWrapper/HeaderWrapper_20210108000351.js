import React from 'react';
import styles from "./HeaderWrapper.module.scss";
import HeaderWrapperButton from "../button/StandardButton";
import ArticleWrapper from './ArticleWrapper/ArticleWrapper'


class HeaderWrapper extends React.Component {
    state = {

    }

    render(){
        return (
            <>
                <section className={ styles.wrapper }>
                    <h1 className={styles.wrapper}> HeaderWrapper </h1>
                    <HeaderWrapperButton> Popular </HeaderWrapperButton>
                    <HeaderWrapperButton> Suggested </HeaderWrapperButton>
                    <HeaderWrapperButton> Extreme </HeaderWrapperButton>
                    <h1 className= { styles.wrapper} > headerWrapperBottom</h1>
                    <ArticleWrapper />
                </section>
            </>
         )
    }
}

export default HeaderWrapper;
