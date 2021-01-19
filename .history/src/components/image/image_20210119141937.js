import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';
import joga from '../../../public/images/yogaII.jpg';


class Image extends React.Component{
    render(){

        const filePath = '../../images';
        return(
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <img className={ styles.articleImage } src= {joga}  alt={filePath}/>
                </>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;