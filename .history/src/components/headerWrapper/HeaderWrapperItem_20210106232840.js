import styles from "./HeaderWrapperItem.module.scss"

const HeaderWrapperItem = (...props) => {
    return (
        <button className= { styles.headerWrapperButton } > {this.props.children} </button>
     );
}

export default HeaderWrapperItem;