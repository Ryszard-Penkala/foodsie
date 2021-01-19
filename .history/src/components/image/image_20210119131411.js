import React from 'react';
import styles from './Image.module.scss';
import AppContext from '../../context';
//import joga from '../../assets/images/yogaII.jpg';


class Image extends React.Component{
    render(){

        const filePath = '../../assets/images/yogaII.jpg';
        return(
        <AppContext.Consumer>
            { (context) => (
                <>
                    {console.log(context)}
                    <img className={ styles.articleImage } src= {require(filePath)}  alt={filePath}/>
                </>
            )}

        </AppContext.Consumer>
        )
    }
}

export default Image;