import styles from "./StandardButton.module.scss"

const StandardButton = (children) => {

    return (
        <button className= { styles.standardButton } > {children} </button>
     );
}

export default StandardButton;