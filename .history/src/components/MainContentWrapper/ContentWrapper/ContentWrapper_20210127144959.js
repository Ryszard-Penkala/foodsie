import React from 'react'
import styles from './ContentWrapper.module.scss'
import StandardButton from '../../button/StandardButton'
import AppContext from '../../../context'

class ContentWrapper extends React.Component {
    render(){
        const articleHeader = {
            yoga : 'Popular yoga',
            yogaII: 'Suggested yoga',
            workouts: 'Extreme yoga',

        }

        return (
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <h1>{articleHeader[context]}</h1>
                    <StandardButton>Start</StandardButton>
                </>
            )}

        </AppContext.Consumer>

            )
        }
}
export default ContentWrapper;