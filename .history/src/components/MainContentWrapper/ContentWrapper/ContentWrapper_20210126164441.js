import React from 'react'
import styles from './ContentWrapper.module.scss'
import StandardButton from '../../button/StandardButton'
import AppContext from '../../../context'

class ContentWrapper extends React.Component {
    render(){
        const articleTitle = {
            'yoga.jpg' : 'YOGA.JPG',
            'yogaII.jpg' : 'YOGAII.JPG',
            'workouts.jpg' : 'WORKOUTS.JPG',


        }
        return (
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <h1>{context}</h1>
                    <StandardButton>Start</StandardButton>
                </>
            )}

        </AppContext.Consumer>

            )
        }
}
export default ContentWrapper;