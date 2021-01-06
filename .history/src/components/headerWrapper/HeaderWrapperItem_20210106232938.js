import styles from "./HeaderWrapperItem.module.scss"

const HeaderWrapperItem = (...props) => {
    return (
        <button className= { styles.headerWrapperButton } > {children} </button>
     );
}

export default HeaderWrapperItem;