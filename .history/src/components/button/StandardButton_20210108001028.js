import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {
    handleClick =  () => console.log('click handlniety');

    return (
        <button className= { styles.standardButton } onClick={handleClick}> {props.children} </button>
     );
}

export default StandardButton;