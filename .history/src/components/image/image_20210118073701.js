import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';
import yogaimage from  '../../assets/images/yogaII.jpg'

class Image extends React.Component{
    render(){
        return(
        <AppContext.Consumer>
            { (context) => (
                <img className={ styles.articleImage } src= { require ( '../../assets/images/yogaII.jpg' )}  alt="yoga"/>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;