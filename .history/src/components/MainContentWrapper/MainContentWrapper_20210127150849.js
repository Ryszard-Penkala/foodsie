import React from 'react';
import styles from './MainContentWrapper.module.scss';
import AppContext from '../../context';
import ArticleWrapper from './ArticleWrapper/ArticleWrapper';

const types = {
    Popular: 'Popular',
    Sugessted: 'Sugessted',
    Extreme: 'Extreme'
    }

const mainImage = {
    yoga: 'yoga',
    yogaII: 'yogaII',
    workouts: 'workouts'
}

class MainContentWrapper extends React.Component {
    state = {
        imageLink : 'yogaII',
        activeOption: types.Popular,
    }

    handleRadioButtonClick = (type, mainImage) => {
        this.setState({
            activeOption: type,
            imageLink: mainImage,
        })
    }

    render(){
        return (
            <>
                <AppContext.Provider value={ this.state.imageLink }>
                    <section className={ styles.wrapper }>

                        <section className={styles.wrapper}> MainContentWrapper </section>
                            <nav className= { styles.navWrapper}>
                                <section>
                                    <input
                                        className = { styles.radioButton }
                                        id = {types.Popular}
                                        type = 'radio'
                                        checked = {this.state.activeOption === types.Popular}
                                        onChange = {() => this.handleRadioButtonClick(types.Popular, mainImage.yogaII)}
                                    />
                                    <label htmlFor={types.Popular} className = { styles.radioButtonLabel }>Popular</label>
                                </section>
                                <section>
                                    <input
                                        className = { styles.radioButton }
                                        id = {types.Sugessted}
                                        type = 'radio'
                                        checked = {this.state.activeOption === types.Sugessted}
                                        onChange = {() => this.handleRadioButtonClick(types.Sugessted, mainImage.yoga)}
                                    />
                                    <label htmlFor={types.Sugessted} className = { styles.radioButtonLabel }>Sugessted</label>
                                </section>
                                <section>
                                    <input
                                        className = { styles.radioButton }
                                        id = {types.Extreme}
                                        type = 'radio'
                                        checked = {this.state.activeOption === types.Extreme}
                                        onChange = {() => this.handleRadioButtonClick(types.Extreme, mainImage.workouts)}
                                    />
                                    <label htmlFor={types.Extreme} className = { styles.radioButtonLabel }>Extreme</label>
                                </section>
                            </nav>




                            <ArticleWrapper>

                            </ArticleWrapper>
                        <section className= { styles.wrapper} > headerWrapperBottom</section>
                    </section>
                </AppContext.Provider>
             </>
         )
    }
}

export default MainContentWrapper;
