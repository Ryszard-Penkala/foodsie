import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    return (
        <>
            {console.log(props.radioButtonId)}
            <button type={'radio'} name={'standardRadioButton'} buttonId={props.radioButtonId} className= { styles.standardButton } > {props.children} </button>
            <div className="radioButton"></div>
        </>
     );
}

export default StandardButton;