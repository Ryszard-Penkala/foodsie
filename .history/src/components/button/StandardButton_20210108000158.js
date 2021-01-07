import styles from "./HeaderWrapperButton.module.scss"

const HeaderWrapperButton = (props) => {
    return (
        <button className= { styles.headerWrapperButton } > {props.children} </button>
     );
}

export default HeaderWrapperButton;