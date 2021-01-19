import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';


class Image extends React.Component{
    render(){
        const articleImagePath = './images/'

        return(
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <img className={ styles.articleImage } src= {articleImagePath + context} alt={context}/>
                </>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;