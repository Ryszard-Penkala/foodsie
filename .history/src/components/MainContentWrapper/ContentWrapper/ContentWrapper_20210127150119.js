import React from 'react'
import styles from './ContentWrapper.module.scss'
import StandardButton from '../../button/StandardButton'
import AppContext from '../../../context'

class ContentWrapper extends React.Component {
    render(){
        const articleHeader = {
            yoga : 'Suggested yoga',
            yogaII: 'Popular yoga',
            workouts: 'Extreme yoga',

        }
        const articleContent = {
            yoga: 'A relaxing 30 minutes workout for begginers.',
            yogaII: 'An intensive 45 minutes training.',
            workouts: 'An extreme 60 minutes workout for advanced.',

        }

        return (
        <AppContext.Consumer>
            { (context) => (
                <>
                    <h3>{articleHeader[context]}</h3>
                    <h2>{articleContent[context]}</h2>
                    <StandardButton>Start</StandardButton>
                </>
            )}

        </AppContext.Consumer>

            )
        }
}
export default ContentWrapper;