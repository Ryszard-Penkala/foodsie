import React from 'react'
import styles from './ContentWrapper.module.scss'
import StandardButton from '../../button/StandardButton'
import AppContext from '../../../context'

class ContentWrapper extends React.Component {
    render(){
        const articleHeader = {
            yoga : 'Suggested yoga',
            yogaII: 'Popular yoga',
            workouts: 'Extreme workouts',

        }
        const articleContent = {
            yoga: 'A relaxing 30 minutes workout for begginers.',
            yogaII: 'An intensive 45 minutes training.',
            workouts: 'An extreme 60 minutes workout for advanced.',

        }

        const workoutLink ={
            yoga: 'https://www.youtube.com/watch?v=v7AYKMP6rOE',
            yogaII: 'https://www.youtube.com/watch?v=jHZPtn15agE',
            workouts: 'https://www.youtube.com/watch?v=I8IeRLHm-Xs',
        }

        return (
        <AppContext.Consumer>
            { (context) => (
                <>
                    <section className={styles.contentWrapper}>
                        <h2 className={styles.heading2}>{articleHeader[context]}</h2>
                        <h3>{articleContent[context]}</h3>
                        <StandardButton videoLink = {workoutLink[context]} >Start now</StandardButton>
                    </section>
                </>
            )}

        </AppContext.Consumer>

            )
        }
}
export default ContentWrapper;