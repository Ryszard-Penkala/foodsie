import React from 'react';
import styles from "./HeaderWrapper.module.scss";
import AppContext from '../../context';
import StandardButton from "../button/StandardButton";
import ArticleWrapper from './ArticleWrapper/ArticleWrapper';

const types = {
    Popular: 'Popular',
    Sugessted: 'Sugessted',
    Extreme: 'Extreme'
    }

class HeaderWrapper extends React.Component {
    state = {
        imageLink : 'yogaII.jpg',
    }

    render(){
        return (
            <>
                <AppContext.Provider value={ this.state.imageLink }>
                    <section className={ styles.wrapper }>
                        <h1 className={styles.wrapper}> HeaderWrapper </h1>
                        <input
                            id = {types.Popular}
                            type = 'radio'
                        />
                        <label for={types.Popular}>Popular</label>
                        <input
                            id = {types.Popular}
                            type = 'radio'
                        />
                        <label for={types.Popular}>Popular</label>
                        <input
                            id = {types.Popular}
                            type = 'radio'
                        />
                        <label for={types.Popular}>Popular</label>

                        <StandardButton  > Popular </StandardButton>
                        <StandardButton  > Suggested </StandardButton>
                        <StandardButton  > Extreme </StandardButton>
                        <h1 className= { styles.wrapper} > headerWrapperBottom</h1>
                        <ArticleWrapper />
                    </section>
                </AppContext.Provider>
             </>
         )
    }
}

export default HeaderWrapper;
