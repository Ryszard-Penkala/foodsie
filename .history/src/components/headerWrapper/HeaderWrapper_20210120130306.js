import React from 'react';
import styles from "./HeaderWrapper.module.scss";
import AppContext from '../../context';
import StandardButton from "../button/StandardButton";
import ArticleWrapper from './ArticleWrapper/ArticleWrapper';



class HeaderWrapper extends React.Component {
    state = {
        imageLink : 'yogaII.jpg'
    }

    render(){
        return (
            <>
                <AppContext.Provider value={ this.state.imageLink }>
                    <section className={ styles.wrapper }>
                        <h1 className={styles.wrapper}> HeaderWrapper </h1>
                        <StandardButton radioButtonId={'Popular'} > Popular </StandardButton>
                        <StandardButton radioButtonId={'Suggested'} > Suggested </StandardButton>
                        <StandardButton radioButtonId={'Extreme'} > Extreme </StandardButton>
                        <h1 className= { styles.wrapper} > headerWrapperBottom</h1>
                        <ArticleWrapper />
                    </section>
                </AppContext.Provider>
             </>
         )
    }
}

export default HeaderWrapper;
