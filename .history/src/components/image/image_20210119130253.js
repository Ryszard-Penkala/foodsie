import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';
import joga from '../../assets/images/yogaII.jpg';


class Image extends React.Component{
    render(){
        return(
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <img className={ styles.articleImage } src= {joga}  alt="yoga"/>
                </>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;