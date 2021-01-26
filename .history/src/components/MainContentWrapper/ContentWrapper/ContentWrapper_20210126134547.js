import React from 'react'
import styles from './ContentWrapper.module.scss'
import StandardButton from '../../button/StandardButton'

class ContentWrapper extends React.Component {
    render(){
        return (
            <>
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <img className={ styles.articleImage } src= { articleImagePath + context } alt={ context }/>
                </>
            )}

        </AppContext.Consumer>

            </>

            )
        }
}
export default ContentWrapper;