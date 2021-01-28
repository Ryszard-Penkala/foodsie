import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';


class Image extends React.Component{
    render(){
        const articleImagePath = './images/'
        const fileExtension = {
            jpg :'.jpg',
        }

        return(
        <AppContext.Consumer>
            { (context) => (
                <img className={ styles.articleImage } src= { articleImagePath + context + fileExtension.jpg} alt={ context }/>

            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;