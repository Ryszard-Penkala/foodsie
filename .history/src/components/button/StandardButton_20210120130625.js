import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    return (
        <>
            <button type={'radio'} name={'standardRadioButton'} buttonId={props.children} className= { styles.standardButton } > {props.children} </button>
            <label htmlFor={props.children}> {props.children} </label>
        </>
     );
}

export default StandardButton;