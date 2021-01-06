import styles from "./HeaderWrapperItem.module.scss"

const HeaderWrapperItem = (props) => {
    return (
        <button className= { styles.headerWrapperButton } > {props.children} </button>
     );
}

export default HeaderWrapperItem;