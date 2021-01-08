import React form 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';
import yogaImage from '../../assets/images/yogaII.jpg';
import { createFactory } from 'react';

class Image extends React.Component{
    render(){
        return(
            <AppContext.Consumer>
            { (context) =>(
                <img className={ styles.articleImage } src={ context.imageLink } alt="yoga"/>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;