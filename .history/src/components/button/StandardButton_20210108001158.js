import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    return (
        <button className= { styles.standardButton } onClick={handleClick}> {props.children} </button>
     );
}

export default StandardButton;