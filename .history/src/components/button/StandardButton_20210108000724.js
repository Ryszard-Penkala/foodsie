import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {
    const handleClick = { () => 'click handlnięty'}
    return (
        <button className= { styles.standardButton } onClick="handleClick"> {props.children} </button>
     );
}

export default StandardButton;