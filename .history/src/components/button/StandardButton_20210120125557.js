import styles from "./StandardButton.module.scss"

const StandardButton = (props) => {

    return (
        <>
            <button type={'radio'} name={'standardRadioButton'} id={props.children} className= { styles.standardButton } > {props.children} </button>
            <div className="radioButton"></div>
        </>
     );
}

export default StandardButton;