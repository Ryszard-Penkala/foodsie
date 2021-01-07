import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    return (
        <button className= { styles.standardButton } > {props.children} </button>
     );
}

export default StandardButton;