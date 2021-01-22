import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    onClick(console.log('click'));

    return (
        <>
            <button type={'radio'} name={'standardRadioButton'} buttonId={props.children} className= { styles.standardButton } > {props.children} </button>
            <label htmlFor={props.children} className= {styles.standardButtonLabel} > {props.children} </label>
        </>
     );
}

export default StandardButton;