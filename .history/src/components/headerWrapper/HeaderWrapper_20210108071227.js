import React from 'react';
import styles from "./HeaderWrapper.module.scss";
import StandardButton from "../button/StandardButton";
import ArticleWrapper from './ArticleWrapper/ArticleWrapper';
import AppContext from '../../context'



class HeaderWrapper extends React.Component {
    state = {
        imageLink : '../../assets/images/yogaII.jpg'
    }

    render(){
        return (
            <AppContext.Provider value={ this.state.imageLink }>
                <section className={ styles.wrapper }>
                    <h1 className={styles.wrapper}> HeaderWrapper </h1>
                    <StandardButton> Popular </StandardButton>
                    <StandardButton> Suggested </StandardButton>
                    <StandardButton> Extreme </StandardButton>
                    <h1 className= { styles.wrapper} > headerWrapperBottom</h1>
                    <ArticleWrapper />
                </section>
                { console.log(this.state.imageLink) }
            </AppContext.Provider>
         )
    }
}

export default HeaderWrapper;
