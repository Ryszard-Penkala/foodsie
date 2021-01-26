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
                    <h1>{context}</h1>
                </>
            )}

        </AppContext.Consumer>

            </>

            )
        }
}
export default ContentWrapper;