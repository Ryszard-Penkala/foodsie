import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    return (
        <button type={'radio'} className= { styles.standardButton } > {props.children} </button>
        <div className="radioButton"></div>
     );
}

export default StandardButton;