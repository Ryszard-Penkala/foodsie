import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';
import yogaimage from  '../../assets/images/yogaII.jpg'

class Image extends React.Component{
    render(){
        return(
        <AppContext.Consumer>
            {const joga = context}
            { (context) => (
                <>
                    <img className={ styles.articleImage } src= { yogaimage }  alt="yoga"/>
                </>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;