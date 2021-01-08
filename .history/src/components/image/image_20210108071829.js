import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';\
import { createFactory } from 'react';

class Image extends React.Component{
    render(){
        return(
            <AppContext.Consumer>
            { (context) =>(
                <img className={ styles.articleImage } src={ context } alt="yoga"/>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;